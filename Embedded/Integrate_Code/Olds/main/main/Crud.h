#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>
#include <Arduino_JSON.h>
#include "servocontrol.h"
#include "ContactFree_Temp_Test_header_v.h"
#include "airquality_header_v.h"
#include "gas_sensing.h"

//Your Domain name with URL path or IP address with path
const char* PostserverName = "https://ssokdam.com/api/embedded/send";
const char* GetserverName = "https://ssokdam.com/api/embedded/receive?embId=1";  //QR찍은 상태
int inputStatus= 0; //0은 투입 안된상태 1은 투입된상태
char posting[128];
String information;
String informationsArr[2];

void Post(){
        WiFiClientSecure client;
      HTTPClient http;
      client.setInsecure();
      long randnum1 = random(9999);
      long randnum2 = random(9999);
      long randnum3 = random(9999);
      long randnum4 = random(9999);
  /*  /////////////////////////////////////////////////////////  
      client.stop();
    if (client.connect(host, 443)) {
      client.println("POST " + url + " HTTP/1.0");
      client.println("Host: " + (String)host);
      client.println(F("User-Agent: ESP"));
      client.println(F("Connection: close"));
      client.println(F("Content-Type: application/x-www-form-urlencoded;"));
      client.print(F("Content-Length: "));
      client.println(data.length());
      client.println();
      client.println(data);
      Serial.println(F("Data were sent successfully"));
        while (client.connected()) {
          String line = client.readStringUntil('\n'); //HTTP headers
          if (line == "\r") {
            break;
          }
        }
        String line = client.readStringUntil('\n'); //payload first row
    } else {
      Serial.println(F("Connection wasnt established"));
    }
    //////////////////////////////////*/
      // Your Domain name with URL path or IP address with path
      http.begin(client, PostserverName);

//      // Specify content-type header
//      http.addHeader("Content-Type", "application/x-www-form-urlencoded");
//      // Data to send with HTTP POST
//      String httpRequestData = "api_key=tPmAT5Ab3j7F9&sensor=BME280&value1=24.25&value2=49.54&value3=1005.14";           
//      // Send HTTP POST request
//      int httpResponseCode = http.POST(httpRequestData);
      
      // If you need an HTTP request with a content type: application/json, use the following:
      http.addHeader("Content-Type", "application/json");
      char input[] = "{\"embId\":1,\"userId\":\"test\",\"embFullTra\": %d ,\"embFullCig\":%d,\"embLat\":\"%d\",\"embLng\":\"%d\",\"embBat\":111,\"embCnt\":111,\"embSta\":\"Y\"}";
      sprintf(posting, input, randnum1, randnum2,randnum3,randnum4);
      int httpResponseCode = http.POST(posting);
      Serial.println(posting);
      // If you need an HTTP request with a content type: text/plain
      //http.addHeader("Content-Type", "text/plain");
      //int httpResponseCode = http.POST("Hello, World!");
      
      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);
        
      // Free resources
      http.end();
}

String httpGETRequest(const char* GetserverName) {
  HTTPClient http;
  http.begin(GetserverName);
  int httpResponseCode = http.GET();
  String payload = "{}"; 
  if (httpResponseCode>0) {
    Serial.print("HTTP Response code: ");
    Serial.println(httpResponseCode);
    payload = http.getString();
  }
  else {
    Serial.print("Error code: ");
    Serial.println(httpResponseCode);
  }
  http.end();
  return payload;
}

void Get(){
  information = httpGETRequest(GetserverName);
  Serial.println(information);
  JSONVar myObject = JSON.parse(information);
  // JSON.typeof(jsonVar) can be used to get the type of the var
  if (JSON.typeof(myObject) == "undefined") {
    Serial.println("Parsing input failed!");
    return;
    }
  //Serial.print("JSON object = ");
  //Serial.println(myObject);
    
  // myObject.keys() can be used to get an array of all the keys in the object
  JSONVar keys = myObject.keys();
  for (int i = 0; i < keys.length(); i++) {
    JSONVar value = myObject[keys[i]];
    JSONVar Qrc = "Y"; //for check
    Serial.print(keys[i]);
    Serial.print(" = ");
    Serial.println(value);
    if (value == Qrc){ //y되는 순간 뚜껑이 열린다.
          
          //서보모터 코드
          input_open(); //뚜껑 열림 
          delay(1000);
          //Serial.println("cds 비접촉");
          /*비접촉 
          if(cds()==1){ //리턴 값이 1이면 cds에 물체가 통과 된것임
          inputStatus = 1; // 0은 입력 안받은 상태 1은 입력 받은 상태
          }; 
            */
          
          //서보모터 코드
          
          if(inputStatus == 1){
            //판별
         
          input_close(); //입구 뚜껑 닫고 판별 시작

          if(temp_check() == 0){ //0이면 넘지 30도 넘지 않음.
            Serial.println("30도 넘지않음");
          }else if(gas_check() == 0){ //0이면 가스 감지 안됨
            Serial.println("가스감지 안됨");
          }else if(airquality_chek() == 0){ //0이면 깨끗함
            Serial.println("공기질 양호");
          }else{
            shake(); //담배꽁초 판별되어 터는 작업 실시
          }
          
          
          }else break;
          
    }
   //String output = String(value);
    //Serial.println(output);
  }
}

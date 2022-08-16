#include "Credentials.h"

#include "Crud.h"

//const char* ssid = "Tentacion2";
//const char* password = "tkwk12tkwK!";

// the following variables are unsigned longs because the time, measured in
// milliseconds, will quickly become a bigger number than can be stored in an int.
unsigned long lastTime = 0;
// Timer set to 10 minutes (600000)
//unsigned long timerDelay = 600000;
// Set timer to 5 seconds (5000)
unsigned long timerDelay = 5000;

void setup() {
  Serial.begin(115200);
  pinMode(A0,INPUT); //숫자에 입력받을 아날로그 핀 
  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());

  Serial.println("Timer set to 5 seconds (timerDelay variable), it will take 5 seconds before publishing the first reading.");
}

void loop() {
  //Send an HTTP POST request every 10 minutes
  if ((millis() - lastTime) > timerDelay) {
    //Check WiFi connection status
    if (WiFi.status() == WL_CONNECTED) {
      //Post(); //CRUD 헤더파일로 부터 온다. //스레드 분리 구현 필요 
      //delay(1000);
      Get(); // 지속해서 기기의 qr값을 읽어온다 qr값이 y가 되면 로직 실행 
      delay(1000);

    }
    else {
      Serial.println("WiFi Disconnected");
    }
    lastTime = millis();
  }
}

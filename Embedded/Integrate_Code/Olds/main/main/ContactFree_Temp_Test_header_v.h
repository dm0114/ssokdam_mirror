/*예제138-1
비접촉적외선 온도센서로 이마의 온도를 측정해보자!
한번만 측정하면 정확도가 떨어지니까 5회 측정을해서 평균을 내보자!
*/ 

#include <Wire.h>
#include <Adafruit_MLX90614.h> //라이브러리 검색 : Adafruit_MLX90614 library에서 추가파일까지 설치해야한다.

Adafruit_MLX90614 mlx = Adafruit_MLX90614();
float temp;
int temp_cnt = 0;
int max_temp=0;
int temp_check(){
  for(int i=0;i<5;i++){ //1초 간 판별
      temp += mlx.readObjectTempC();    //데이터 누적..
  temp_cnt++;

  if(temp_cnt >= 5){                    ////0 1 2 3 4 (5) 결과출력
    temp = temp/5;
    Serial.println(temp);
    if(temp > max_temp){
      max_temp = temp;
    }
    temp = 0;
    temp_cnt =0;
  }

  delay(200);
  }
     if(temp > 30){
      int max_temp=0;
      return 1;
    }else return 0;
}

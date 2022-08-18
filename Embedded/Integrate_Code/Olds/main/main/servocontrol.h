#include <ESP32_Servo.h>
static const int servoPin = 27; // 임시 
Servo servo1;

void input_open() {
    for(int posDegrees = 0; posDegrees <= 180; posDegrees++) {
        servo1.write(posDegrees); // 모터의 각도를 설정합니다.
        //Serial.println(posDegrees);
        Serial.println("뚜껑 열림");
        delay(20);
    }
}
void input_close() {
    for(int posDegrees = 180; posDegrees >= 0; posDegrees--) {
        servo1.write(posDegrees); // 모터의 각도를 설정합니다.
        //Serial.println(posDegrees);
        Serial.println("뚜껑 닫힘");
        delay(20);
    }
}
void shake(){
    for(int i=0;i<30;i++){
      for(int posDegrees = 0; posDegrees <= 180; posDegrees++) {
        servo1.write(posDegrees); // 모터의 각도를 설정합니다.
        //Serial.println(posDegrees);      
        delay(10);
    }

        for(int posDegrees = 180; posDegrees >= 0; posDegrees--) {
        servo1.write(posDegrees); // 모터의 각도를 설정합니다.
        //Serial.println(posDegrees);
        delay(10);
    }
    }
}

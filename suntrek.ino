#include <Servo.h>

Servo servoX; 
Servo servoY;  

int LDR_TOP = A0;
int LDR_BOTTOM = A3;
int LDR_LEFT = A1;
int LDR_RIGHT = A2;

int servoXpos = 90;
int servoYpos = 90;

void setup() {
  Serial.begin(9600);
  servoX.attach(9);
  servoY.attach(10);
  servoX.write(servoXpos);
  servoY.write(servoYpos);
  delay(500);
}

void loop() {
  int top = analogRead(LDR_TOP);
  int bottom = analogRead(LDR_BOTTOM);
  int left = analogRead(LDR_LEFT);
  int right = analogRead(LDR_RIGHT);
  
  int errorX = right - left;   
  int errorY = top - bottom;    
  int threshold = 50;

  if (abs(errorX) > threshold) {
    if (errorX > 0) servoXpos += 1;  
    else servoXpos -= 1;            
  }

  if (abs(errorY) > threshold) {
    if (errorY > 0) servoYpos += 1; 
    else servoYpos -= 1;            
  }

  servoXpos = constrain(servoXpos, 0, 180);
  servoYpos = constrain(servoYpos, 0, 180);

  servoX.write(servoXpos);
  servoY.write(servoYpos);

  Serial.print("L: "); Serial.print(left);
  Serial.print(" R: "); Serial.print(right);
  Serial.print(" T: "); Serial.print(top);
  Serial.print(" B: "); Serial.print(bottom);
  Serial.print(" | ServoX: "); Serial.print(servoXpos);
  Serial.print(" ServoY: "); Serial.println(servoYpos);

  delay(100);
}
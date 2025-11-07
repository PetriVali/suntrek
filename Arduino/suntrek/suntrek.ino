#include <ESP32Servo.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include "DHT.h"

#define DHTPIN 14    
#define DHTTYPE DHT11

#define LDR_TOP 36
#define LDR_BOTTOM 39
#define LDR_RIGHT 35
#define LDR_LEFT 34
#define SERVO_X_PIN 12
#define SERVO_Y_PIN 13

DHT dht(DHTPIN, DHTTYPE);

const char* ssid = "A54 Paul";
const char* password = "12345678";
const String apiKey = "afcc69eb884541ada3006585a0876815";

Servo servoX;
Servo servoY;

int posX = 90;
int posY = 90;

const int treshold = 50;
const int luxThreshold = 1000;
unsigned long lastApiCall = 0;

void ldrTracking() {
  int top = analogRead(LDR_TOP);
  int bottom = analogRead(LDR_BOTTOM);
  int right = analogRead(LDR_RIGHT);
  int left = analogRead(LDR_LEFT);

  int deltaX = right - left;
  int deltaY = top - bottom;

  if (abs(deltaX) > treshold) {
    if (deltaX > 0) posX += 1;
    else posX -= 1;
  }

  if (abs(deltaY) > treshold) {
    if (deltaY > 0) posY += 1;
    else posY -= 1;
  }

  posX = constrain(posX, 0, 180);
  posY = constrain(posY, 0, 180);

  servoX.write(posX);
  servoY.write(posY);

  // Serial.print("TrackingLDR X:");
  // Serial.print(posX);
  // Serial.print(" Y:");
  // Serial.print(posY);
  // Serial.println(" ");
  Serial.print("TOP="); Serial.print(top);
Serial.print("  BOTTOM="); Serial.print(bottom);
Serial.print("  LEFT="); Serial.print(left);
Serial.print("  RIGHT="); Serial.println(right);
}

void apiTracking() {
  if (WiFi.status() != WL_CONNECTED) return;

  if (millis() - lastApiCall < 60000) return;  
  lastApiCall = millis();

  HTTPClient http;
  String url = "https://api.ipgeolocation.io/astronomy?apiKey=" + apiKey + "&lat=45.80&long=24.14";
  http.begin(url);
  int httpCode = http.GET();

  if (httpCode > 0) {
    String payload = http.getString();
    StaticJsonDocument<1024> doc;
    DeserializationError error = deserializeJson(doc, payload);

    if (!error) {
      float altitude = doc["sun_altitude"];
      float azimuth = doc["sun_azimuth"];

      if (altitude < 0) {
        servoX.write(90);
        servoY.write(0);
        Serial.println("E noapte - sistem în idle.");
      } else {
        int servoXpos = map((int)azimuth, 60, 300, 0, 180);
        int servoYpos = map((int)altitude, 0, 90, 0, 180);
        servoX.write(servoXpos);
        servoY.write(servoYpos);

        Serial.printf("API Fallback | Azimuth: %.2f | Altitude: %.2f | ServoX:%d ServoY:%d\n",
                      azimuth, altitude, servoXpos, servoYpos);
      }
    } else {
      Serial.println("Eroare la citirea JSON!");
    }
  } else {
    Serial.printf("Eroare HTTP: %d\n", httpCode);
  }
  http.end();
}

void setup() {
  Serial.begin(9600);
  servoX.attach(SERVO_X_PIN);
  servoY.attach(SERVO_Y_PIN);
  WiFi.begin(ssid, password);
  dht.begin();
  Serial.print("Conectare la WiFi...");
   while (WiFi.status() != WL_CONNECTED) {
     delay(500);
     Serial.print(".");
   }
  Serial.println("\nConectat!");
}

void loop() {
  int lightLevel = analogRead(LDR_TOP) + analogRead(LDR_BOTTOM) +analogRead(LDR_LEFT) + analogRead(LDR_RIGHT);
  int temp=dht.readTemperature();

   if(temp<=28)
   {
    if (lightLevel / 4 > 200) 
      ldrTracking();
    else
      apiTracking();
   }
   else if(temp>28)
   {
    servoX.write(90);
    servoY.write(0);
   }
delay(500);
}
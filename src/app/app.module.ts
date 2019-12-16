import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MqttModule, MqttService , IMqttServiceOptions} from 'ngx-mqtt';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MqttProvider } from '../providers/mqtt/mqtt';

export const MQTT_SERVICE_OPTIONS : IMqttServiceOptions = {
  hostname: '192.168.1.4',
  protocol : "ws",
  port: 8883,
};

export function mqttServiceFactory() {
  return new MqttService(MQTT_SERVICE_OPTIONS);
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MqttModule.forRoot({
      provide: MqttService,
      useFactory: mqttServiceFactory
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MqttProvider
  ]
})
export class AppModule {}

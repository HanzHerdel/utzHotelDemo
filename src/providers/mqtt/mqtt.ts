//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MqttService, IMqttMessage} from 'ngx-mqtt';
import { Subscription } from 'rxjs'
/*
  Generated class for the MqttProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MqttProvider {
  public subs : Subscription;
  message : string = "";
  topic : string = "";
  author : string = "app : ";
  publishM : string = "";
  messageArray = [];
  constructor(/*public http: HttpClient,*/private mqttService: MqttService,) {
    console.log('Hello MqttProvider Provider');
  }
public subscribe( topic : string){

    if(this.subs){
      this.unsubscribe();
    }
    this.messageArray = [];

    this.subs = this.mqttService.observe(topic).subscribe(
      (message : IMqttMessage) => {
        console.log(message);
        this.message = message.payload.toString();
        this.messageArray.push(this.message);
      });

  }
    public publish(topic:string, publishM:String) {
    console.log(topic);
    this.mqttService.unsafePublish(topic, publishM);
  }
  public unsubscribe(){
    console.log("unsubscribe");
    this.subs.unsubscribe();
  }
}

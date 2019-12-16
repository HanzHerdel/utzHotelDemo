import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MqttProvider } from '../../providers/mqtt/mqtt';
import { ModalController, ModalOptions } from 'ionic-angular'

//ionic cordova run android -target #YPDISSPJGMPNIBPN

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController, public mqttProvider:MqttProvider,private modalCtrl:ModalController) {

  }
iluminacion(){
	const modalOps:ModalOptions={
		showBackdrop:true,
		enableBackdropDismiss:true,
		cssClass: "noCompleto",
	}
	console.log("mornga");
	const iluminacion =this.modalCtrl.create('IluminacionPage',null,modalOps)
	console.log(iluminacion,"...");
	iluminacion.present();
}

}

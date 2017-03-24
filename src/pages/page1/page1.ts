import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Page3 } from '../page3/page3';
import { Page2 } from '../page2/page2';
import { Page4 } from '../page4/page4';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
    
  }
  createacc() {
    console.log('customer register page');
    this.navCtrl.push(Page3);
  }
  gotodash() {
    console.log('Dashboard page');
    this.navCtrl.push(Page2);
  }
  presentModal() {
    let modal = this.modalCtrl.create(Page4);
    modal.present();
  }

}

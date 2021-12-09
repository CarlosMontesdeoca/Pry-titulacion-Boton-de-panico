import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.page.html',
  styleUrls: ['./new-contact.page.scss'],
})
export class NewContactPage {

  constructor(
    private navCtrl: NavController
  ) { }

  goToListContact() {
    this.navCtrl.navigateForward( '/tabs/tab2' );
  }

}

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  contacts = [
    {
      name: "Mejor Amigo",
      number: "+593978885465"
    },
    {
      name: "Mamá",
      number: "+593213455235"
    },
    {
      name: "Papá",
      number: "+593213455235"
    },
    {
      name: "Mejor Amigo",
      number: "+593978885465"
    },
    {
      name: "Mamá",
      number: "+593213455235"
    },
    {
      name: "Papá",
      number: "+593213455235"
    },
    {
      name: "Mejor Amigo",
      number: "+593978885465"
    },
    {
      name: "Mamá",
      number: "+593213455235"
    },
    {
      name: "Papá",
      number: "+593213455235"
    },{
      name: "Mejor Amigo",
      number: "+593978885465"
    },
    {
      name: "Mamá",
      number: "+593213455235"
    },
    {
      name: "Papá",
      number: "+593213455235"
    }
  
  ]

  constructor(
    private navCtrl: NavController
  ) {
    
  }

  editContact( contact ) {
    console.log(contact)
  }
  
  goToNewContact() {
    this.navCtrl.navigateForward( '/new-contact' );
  }
}

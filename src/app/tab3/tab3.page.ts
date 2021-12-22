import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

const printCurrentPosition = async () => {
  const coordinates = await Geolocation.getCurrentPosition();

  console.log('Current position:', coordinates);
};

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  user = [
    {
      name: "Nombre de Usuario",
      message: "help me!! I need you, this my location"
    }
  ]

  userInfo = [
    {
      name: "Carlos Montesdeoca",
      message: "hola necesito ayuda estoy en peligro",
      ad: "this message is sending for 'boton de panico app', you can dowload here: url"
    }
  ]

  printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
  
    console.log('Current position:', coordinates);
  };

  constructor() {}

}

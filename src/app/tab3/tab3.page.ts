import { Component } from '@angular/core';

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

  constructor() {}

}

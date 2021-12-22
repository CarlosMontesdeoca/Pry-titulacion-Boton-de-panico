import { Component, OnInit } from '@angular/core';
import { ALARMAS } from 'src/data/data.alarma';
import { Alarma } from 'src/interfaces/alarma.interface';
import { NavController } from '@ionic/angular';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page implements OnInit {

  alarmas: Alarma[] = []

  public latitude;
  public longitude;

  constructor(
    private navCtrl: NavController,
    private locationService: LocationService
  ) {
    this.alarmas = ALARMAS.slice(0);
  }

  ngOnInit() {
    let location = this.getLocation();
  }

  reproducir (alarma: Alarma) {
    console.log(alarma);

    let audio = new Audio();

    audio.src = alarma.audio;
    alarma.reproduciendo = true;
    audio.load();
    audio.play();

    setTimeout(() => {
      alarma.reproduciendo = false;
    }, alarma.duracion * 1000);
  }

  getLocation() {
    this.locationService.getPosition().then(pos => {
      this.latitude = pos.lat;
      this.longitude = pos.lng;
  });
}

  goToInfo() {
    this.navCtrl.navigateForward( '/info' );
  }
}


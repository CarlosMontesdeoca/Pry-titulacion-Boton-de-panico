import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule // module
  ],
  bootstrap: [AppComponent],
  providers: [ 
    {  
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy,
    } 
  ],
  
})
export class AppModule {}

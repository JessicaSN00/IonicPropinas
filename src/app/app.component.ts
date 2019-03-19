import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { TabsPage } from '../pages/tabs/tabs';

export const config = {
  apiKey: 'AIzaSyBDdEO2eAJzWdnFBnIJkx47tgl16A7OHks',
  authDomain: 'restaurantes-8eb92.firebaseapp.com',
  databaseURL: 'https://restaurantes-8eb92.firebaseio.com',
  projectId: 'restaurantes-8eb92',
  storageBucket: 'restaurantes-8eb92.appspot.com',
  messagingSenderId: "995600852115"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

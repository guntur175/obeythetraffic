import { Component } from '@angular/core';
import firebase from 'firebase';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
// import { CreatePage } from '../pages/createacc/createacc';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { OnboardingPage } from '../pages/onboarding/onboarding';
// import { ProfilePage } from '../pages/profile/profile';
// import { UploadPage } from '../pages/upload/upload';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
rootPage = TabsPage;
// rootPage = LoginPage;


  constructor(platform: Platform) {
    firebase.initializeApp({
        apiKey: "AIzaSyCwe9bvwh0wPh1C1gfH55YfVewjxZ_iJR4",
        authDomain: "obey-dc562.firebaseapp.com",
        databaseURL: "https://obey-dc562.firebaseio.com",
        projectId: "obey-dc562",
        storageBucket: "obey-dc562.appspot.com",
        messagingSenderId: "772216421759"

    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}

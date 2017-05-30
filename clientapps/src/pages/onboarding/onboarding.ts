import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
/*
  Generated class for the Onboarding page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html'
})
export class OnboardingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
      slides = [
          {
            title: "Welcome to Obey The Traffic!",
            image: "assets/logo-polantas.png"
          },
          {
            title: "What is Obey The Traffic?",
            description: "<b>First Mobile Application in The World to Report Infraction.</b>",
            image: "assets/logo-polantas.png"
          },
          {
            title: "How to User?",
            description: "<b>Its very simple to use</b>. just take a picture, write infraction in the field, then upload.",
            image: "assets/logo-polantas.png"
          }
      ];

      skip()
      {
       this.navCtrl.setRoot(LoginPage);
        // this.navCtrl.setRoot(TabsPage);
      }

}

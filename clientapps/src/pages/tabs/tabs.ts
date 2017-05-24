import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { UploadPage } from '../upload/upload';
import { TimelinePage } from '../timeline/timeline';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TimelinePage;
  tab2Root: any = UploadPage;
  tab3Root: any = ProfilePage;
   constructor(public navCtrl: NavController) {
    // if(!localStorage.getItem("token")) {
    //   navCtrl.setRoot(TabsPage);
    // }
  }
}

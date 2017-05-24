import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController, ToastController } from 'ionic-angular';
import { CreatePage } from '../createacc/createacc';
import { UserAuth } from '../../providers/user';
import { TabsPage } from '../tabs/tabs';
import { ProfilePage } from '../profile/profile'
import { Facebook } from '@ionic-native/facebook';

import { AuthService } from '../../providers/auth-service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from 'firebase';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading:any;
  loginData = { username:'', password:''};
  data:any;
  userProfile: any = null;

   items: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire ,public _auth:AuthService, public facebook: Facebook,public navCtrl: NavController, public navParams: NavParams, public userauth:UserAuth, public loadingCtrl: LoadingController, private toastCtrl: ToastController) 
  {
 this.items = af.database.list('/items');

  }
  signInWithFacebook(): void {
    this._auth.signInWithFacebook()
      .then(() => this.onSignInSuccess());
  }

  private onSignInSuccess(): void {
    
    this.navCtrl.push(TabsPage);
  }

  ionViewDidLoad() {
  }
//   facebookLogin(){
//     this.facebook.login(['email']).then( (response) => {
//         const facebookCredential = firebase.auth.FacebookAuthProvider
//             .credential(response.authResponse.accessToken);

//         firebase.auth().signInWithCredential(facebookCredential)
//         .then((success) => {
//             console.log("Firebase success: " + JSON.stringify(success));
//             this.userProfile = success;
//             this.navCtrl.push(TabsPage);
//         })
//         .catch((error) => {
//             console.log("Firebase failure: " + JSON.stringify(error));
//         });

//     }).catch((error) => { console.log(error) });
// }
//   doLogin() 
//   {
//     this.showLoader();
//     this.userauth.login(this.loginData).then((result) => {
//       this.loading.dismiss();
//       this.data = result;
//       localStorage.setItem('token', this.data.access_token);
//       this.navCtrl.setRoot(TabsPage);
//     }, (err) => {
//       this.loading.dismiss();
//       this.presentToast(err);
//     });
//   }
 
  createAccount() 
  {
    this.navCtrl.push(CreatePage);
  }
  showLoader()
  {
    this.loading = this.loadingCtrl.create({
        content: 'Proses login...'
    });

    this.loading.present();
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
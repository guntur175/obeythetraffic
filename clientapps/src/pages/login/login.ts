import { Component,ElementRef,OnInit } from '@angular/core';
import { NavController, NavParams,LoadingController, ToastController } from 'ionic-angular';
import { CreatePage } from '../createacc/createacc';
import { UserAuth } from '../../providers/user';
import { TabsPage } from '../tabs/tabs';
import { ProfilePage } from '../profile/profile';

import { Facebook } from '@ionic-native/facebook';
import { AuthService } from '../../providers/auth-service';
import {AuthProviders, AuthMethods,  AngularFire, FirebaseListObservable } from 'angularfire2';
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

   root:any;
  constructor(public navCtrl: NavController,public af: AngularFire, public element: ElementRef) {
    this.element.nativeElement;
  }
  ngOnInit(){
    this.root = this.element.nativeElement;
  	var fbBtn =  this.root.querySelector('#fb-login');
  	fbBtn.addEventListener('click',this.onFacebookLogin.bind(this));
  }
  onFacebookLogin(e){
  	let self = this;
  	this.af.auth.login({
  		provider: AuthProviders.Facebook,
  		method: AuthMethods.Popup
  	}).then(function(response){
  		let user = {
        name: response.auth.displayName,
  			email:response.auth.email,
  			picture:response.auth.photoURL
  		};
  		window.localStorage.setItem('user',JSON.stringify(user));
      this.navCtrl.setRoot(TabsPage);

      //app.setRootpage(TabsPage);
  	}).catch(function(error){
  		console.log(error);
  	});
}
//   data:any;
  
//    items: FirebaseListObservable<any[]>;

//   constructor(public af: AngularFire ,public _auth:AuthService,public navCtrl: NavController, public navParams: NavParams, public userauth:UserAuth, public loadingCtrl: LoadingController, private toastCtrl: ToastController) 
//   {
//  this.items = af.database.list('/items');

//   }
//   signInWithFacebook(): void {
//     this._auth.signInWithFacebook()
//       .then(() => this.onSignInSuccess());
//   }

//   private onSignInSuccess(): void {
    
//     this.navCtrl.setRoot(TabsPage);
//   }

//   ionViewDidLoad() {
//   }
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
 


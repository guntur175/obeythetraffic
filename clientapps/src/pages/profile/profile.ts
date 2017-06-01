import { Component,ElementRef,OnInit } from '@angular/core';
import { NavController, App, LoadingController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';


import { Facebook } from '@ionic-native/facebook';
import { AuthService } from '../../providers/auth-service';
import { AuthProviders, AngularFireAuth,AuthMethods,  AngularFire, FirebaseListObservable } from 'angularfire2';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from 'firebase';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

  
export class ProfilePage {

   constructor() {

        let userProfile = JSON.parse(window.localStorage.getItem('userProfile'));
        console.log(userProfile);  

         return{ userProfile: userProfile };  
        
    }
    
  }
  export class reload{
    constructor(public facebook:Facebook, private app:App,public af:AngularFire, public navCtrl:NavController) {}
    facebookLogin(){
    let self = this;
    this.facebook.logout().then( (response) => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
            .credential(response.authResponse.accessToken);

        firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
       
   
        })
        .catch((error) => {
            console.log("Firebase failure: " + JSON.stringify(error));
        });

    }).catch((error) => { console.log(error) });
    self.navCtrl.setRoot(LoginPage);
  }

  }

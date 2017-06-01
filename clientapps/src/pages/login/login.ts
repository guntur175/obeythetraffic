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
    userProfile:any=null;
    root:any;
  constructor(public toastCtrl:ToastController, private facebook: Facebook,public navCtrl: NavController,public af: AngularFire, public element: ElementRef) {
    this.element.nativeElement;
  }
facebookLogin(){
    let self = this;
    this.facebook.login(['email']).then( (response) => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
            .credential(response.authResponse.accessToken);

        firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
       
            // console.log("Firebase success: " + JSON.stringify(success));
    
            this.userProfile = success;
            this.showAlert("Selamat datang " + this.userProfile.displayName);
            
            let userProfile =	window.localStorage.setItem('userProfile',JSON.stringify(success));
            
   
        })
        .catch((error) => {
            console.log("Firebase failure: " + JSON.stringify(error));
        });

    }).catch((error) => { console.log(error) });
    self.navCtrl.setRoot(TabsPage);
  }

    showError(err: any){  
    err.status==0? 
    this.showAlert("Tidak ada koneksi. Cek kembali sambungan Internet perangkat Anda"):
    this.showAlert("Tidak dapat menyambungkan ke server. Mohon muat kembali halaman ini");
  }
   showAlert(message: string){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();

  //------------------------------------
//   ngOnInit(){
//     this.root = this.element.nativeElement;
//   	var fbBtn =  this.root.querySelector('#fb-login');
//   	fbBtn.addEventListener('click',this.onFacebookLogin.bind(this));
//   }
//   onFacebookLogin(e){
//   	let self = this;
//     this.af.auth.login({
//   		provider: AuthProviders.Facebook,
//   		method: AuthMethods.Popup
//   	})
//     .then(function(response){
      
//   		let user = {
//         providerr:response.auth.providerId,
//         userId:response.auth.uid,
//         name: response.auth.displayName,
//   			email:response.auth.email,
//   			picture:response.auth.photoURL
//   		};
      
      
//     	let userProfile = window.localStorage.setItem('userProfile',JSON.stringify(user));
      
  
      	
  	

//       //app.setRootpage(TabsPage);
//   	}).catch(function(error){
//   		console.log(error);
// });
    
  
//   }
   }
}
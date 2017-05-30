import { Component,ElementRef,OnInit } from '@angular/core';
import { NavController, App, LoadingController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';


import { Facebook } from '@ionic-native/facebook';
import { AuthService } from '../../providers/auth-service';
import {AuthProviders, AuthMethods,  AngularFire, FirebaseListObservable } from 'angularfire2';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from 'firebase';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

  
export class ProfilePage {

   constructor() {

        let user = JSON.parse(window.localStorage.getItem('user'));
        console.log(user);  

         return{
            user: user
        };  
    }
  }

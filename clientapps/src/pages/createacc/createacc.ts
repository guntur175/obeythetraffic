import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { NavController, NavParams, LoadingController, ToastController  } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http,Headers,RequestOptions  } from '@angular/http';
import { UserAuth } from '../../providers/user';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'createacc.html'
})
export class CreatePage {

  loading:any;
  regData = {username:'', password:''};
  // jenis_kendaraan:string;
  // plat_nomor:string;
  // pelanggaran:string;
  // lastImage:string;
//  timestamp:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userauth: UserAuth, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {}


  doSignup() {
    this.showLoader();
    this.userauth.register(this.regData).then((result) => {
      this.loading.dismiss();
      this.navCtrl.pop();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'regiser loading...'
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

  // onSignup(form: NgForm){
  //   let headers = new Headers({ 
  //               'Content-Type': 'application/json',
  //               'Accept': 'application/json'});
  //   let options = new RequestOptions({ headers: headers});
  //   let input = JSON.stringify({
  //     jenis_kendaraan:this.jenis_kendaraan, 
  //     plat_nomor: this.plat_nomor,
  //     pelanggaran:this.pelanggaran, 
  //     lastImage:this.lastImage
     
  //   });
  //   console.log(input);
  //   return this.http.post(apiURL,input,options)
  //   .map(res => res.json())
  //   .subscribe(data => {
  //     let response = data;
  //     console.log(response);
  //   });
  // }


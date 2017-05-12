import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http,Headers,RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'createacc.html'
})
export class CreatePage {
  jenis_kendaraan:string;
  plat_nomor:string;
  pelanggaran:string;
  lastImage:string;
//  timestamp:string;
  constructor(
    public navCtrl: NavController,
    public http:Http) {

  }

  onSignup(form: NgForm){
    let headers = new Headers({ 
                'Content-Type': 'application/json',
                'Accept': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    let url = 'http://localhost:8000/api/postings';
    let input = JSON.stringify({
      jenis_kendaraan:this.jenis_kendaraan, 
      plat_nomor: this.plat_nomor,
      pelanggaran:this.pelanggaran, 
      lastImage:this.lastImage
     
    });
    console.log(input);
    return this.http.post(url,input,options)
    .map(res => res.json())
    .subscribe(data => {
      let response = data;
      console.log(response);
    });
  }

}

import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
import { ViewerPage } from '../viewer/viewer';

let apiURL = 'http://172.18.16.83/tilang-report/public/api/postings';

@Component({
  selector: 'page-contact',
  templateUrl: 'timeline.html',

})
export class TimelinePage {
data: any;

  constructor(public navCtrl: NavController,public http: Http) {
    this.http.get(apiURL)
    .map(res => res.json())
    .subscribe(data => {
        this.data = data;
        console.log(data);
    });
  }
  openPage() 
  {
    this.navCtrl.push(ViewerPage);
  }
}


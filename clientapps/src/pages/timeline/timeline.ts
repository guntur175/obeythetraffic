import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, PopoverController} from 'ionic-angular';
import { ViewerPage } from '../viewer/viewer';

let apiURL = 'http://192.168.43.75/obeythetraffic/adminweb/public/api/postings';

@Component({
  selector: 'page-contact',
  templateUrl: 'timeline.html',

})
export class TimelinePage {
data: any;

  constructor(public popoverCtrl: PopoverController ,public navCtrl: NavController,public http: Http) {
    this.http.get(apiURL)
    .map(res => res.json())
    .subscribe(data => {
        this.data = data;
        console.log(data);
    });
    
  }
  deletePost(post)
  {
    let index = this.data.indexOf(post);
    if(index > -1) {
      this.data.splice(index,1);
    }
  }
  reload()
  {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
  openPage() 
  {
    this.navCtrl.push(ViewerPage);
  }
  
}


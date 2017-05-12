import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CreatePage} from '../createacc/createacc';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

  
export class HomePage {
  Oots: FirebaseListObservable<any>
  constructor(
    private nav: NavController,
    angFire: AngularFire
    ) {
      this.Oots = angFire.database['/Oots'];
   
      
  }
 goToCreateacc(){
   this.nav.push(CreatePage);
 }

}

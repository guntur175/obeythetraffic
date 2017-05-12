import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { NavController, NavParams, ToastController, LoadingController, ActionSheetController,Loading} from 'ionic-angular';
import { Camera } from 'ionic-native';
import { Http,Headers,RequestOptions  } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
//,File, Transfer, FilePat

let apiURL = 'http://172.18.16.83/tilang-report/public/api/postings';

declare var  cordova:any;
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html'
})
export class UploadPage {

  jenis_kendaraan:any;
  plat_nomor:string;
  pelanggaran:string;
  lastImage:string;
  loadCtrl: LoadingController;
  loading:Loading;
  authHttp:AuthHttp;
  base64Image: string;
submitted = false;
  constructor(
    public navCtrl: NavController, 
    public http: Http,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) { }
 
  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 600,
        targetHeight: 600
    }).then((imageData) => {
      this.base64Image = imageData;
      alert(this.base64Image);
    //  this.postUpdatePicture();
      }, (err) => {
        alert(err);
    });
  }
  getPhotoFromGallery(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType     : Camera.PictureSourceType.PHOTOLIBRARY,
        targetWidth: 600,
        targetHeight: 600
    }).then((imageData) => {
      this.base64Image = imageData;
     // this.postUpdatePicture();
      }, (err) => {
    });
}
  uploadPicture() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Pilihan',
      buttons: [
        {
          text: 'Ambil Gambar',
          role: 'ambilGambar',
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: 'Pilih Dari Galleri',
          role: 'gallery',
          handler: () => {
            this.getPhotoFromGallery();
          }
        }
      ]
    });
    actionSheet.present();
}


onUpdate(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
    	
      let param = JSON.stringify({
     	jenis_kendaraan: this.jenis_kendaraan, 
      plat_nomor: this.plat_nomor,
      pelanggaran: this.pelanggaran, 
      lastImage: this.base64Image
      });
      this.http.post(apiURL,param).subscribe(res => {
      	
        let response = res.json();
        if(response.status == 200) {
          this.navCtrl.popToRoot();
          this.showAlert("Postingan berhasil dikirim");
        }
      }, err => { 
        this.navCtrl.popToRoot();
          this.showAlert(err);
      });
    }
  }
  showError(err: any){  
    err.status==0? 
    this.showAlert("Tidak ada koneksi. Cek kembali sambungan Internet perangkat Anda"):
    this.showAlert("Tidak dapat menyambungkan ke server. Mohon muat kembali halaman ini");
  }
  showAlert(message: string){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
}
  // onSignup(form: NgForm){
  //   let headers = new Headers({ 
  //               'Content-Type': 'application/json'});
  //   let option = new RequestOptions({ headers: headers});
  //   let input = JSON.stringify({
  //     jenis_kendaraan: this.jenis_kendaraan, 
  //     plat_nomor: this.plat_nomor,
  //     pelanggaran: this.pelanggaran, 
  //     lastImage: "haha.jpg"
  //   });
  //   console.log(input);
  //   this.http.post('http://localhost:8000/postings',input)
  //   .map(res => res.json())
  //   .subscribe(data => {
  //     let response = data;
  //     console.log(response);
  //   });
  // }

}

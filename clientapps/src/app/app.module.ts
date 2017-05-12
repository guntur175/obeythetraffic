import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';
import { AuthService } from '../providers/auth-service';

import { MyApp } from './app.component';
import { UploadPage } from '../pages/upload/upload';
import { TimelinePage } from '../pages/timeline/timeline';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CreatePage } from '../pages/createacc/createacc';
import { ProfilePage } from '../pages/profile/profile';
import { ViewerPage } from '../pages/viewer/viewer';
import { LoginPage } from '../pages/login/login';
import { EditPostPage } from '../pages/edit-post/edit-post';
import { ProfilEditPage } from '../pages/profil-edit/profil-edit';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { OnboardingPage } from '../pages/onboarding/onboarding';

import { UserAuth } from '../providers/user';
export const firebaseConfig = {
    apiKey: "AIzaSyCwe9bvwh0wPh1C1gfH55YfVewjxZ_iJR4",
    authDomain: "obey-dc562.firebaseapp.com",
    databaseURL: "https://obey-dc562.firebaseio.com",
    storageBucket: "obey-dc562.appspot.com",
    messagingSenderId: "772216421759"
  };

@NgModule({
  declarations: [
    MyApp,
    UploadPage,
    TimelinePage,
    HomePage,
    TabsPage,
    CreatePage,
    ProfilePage,
    ViewerPage,
    LoginPage,
    ProfilEditPage,
    EditPostPage,
    OnboardingPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UploadPage,
    TimelinePage,
    HomePage,
    TabsPage,
    CreatePage,
    ProfilePage,
    ViewerPage,
    LoginPage,
    ProfilEditPage,
    EditPostPage,
    OnboardingPage
    ],
  providers: [AuthService,{provide: ErrorHandler, useClass: IonicErrorHandler}, UserAuth, Facebook ]
})
export class AppModule {}

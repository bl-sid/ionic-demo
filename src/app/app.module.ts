import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PostDashboardPage } from '../pages/post-dashboard/post-dashboard';
import { JobPostPage } from '../pages/job-post/job-post';
import { RestProvider } from '../providers/rest/rest';
import { JobProvider } from '../providers/job/job';
import { HttpClientModule } from '@angular/common/http';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IonTagsInputModule} from "ionic-tags-input";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PostDashboardPage,
    JobPostPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TagInputModule,
    IonTagsInputModule,
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PostDashboardPage,
    JobPostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    JobProvider
  ]
})
export class AppModule {}

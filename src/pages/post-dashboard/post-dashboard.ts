import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JobPostPage } from '../job-post/job-post';

/**
 * Generated class for the PostDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-dashboard',
  templateUrl: 'post-dashboard.html',
})
export class PostDashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDashboardPage');
  }

  postJob() {
    this.navCtrl.push(JobPostPage);
  }

}

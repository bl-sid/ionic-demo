import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostDashboardPage } from './post-dashboard';

@NgModule({
  declarations: [
    PostDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(PostDashboardPage),
  ],
})
export class PostDashboardPageModule {}

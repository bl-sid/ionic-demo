import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobProvider } from '../../providers/job/job';

@IonicPage()
@Component({
  selector: 'page-job-post',
  templateUrl: 'job-post.html',
})
export class JobPostPage {

  jobForm: FormGroup;

  employmentTypes;

  minSalaries;

  experiences;

  locations;

  skillSet;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    formBuilder: FormBuilder, public job: JobProvider) {

      this.getEmploymentTypes();
      this.getMinSalaries();
      this.getExperienceVals();
      this.getLocations();
      this.getSkills();

      this.jobForm = formBuilder.group({
        role: ['', Validators.required],
        location: ['', Validators.required],
        empTypeId: ['', Validators.required],
        salMinId: ['', Validators.required],
        salMaxId: ['', Validators.required],
        experienceId: ['', Validators.required],
        jobDescription: ['', Validators.compose([Validators.required])],
        skills: ['']
      });
  }

  post() {
    console.log(this.jobForm.value);
  }

  getEmploymentTypes() {
    this.job.getEmploymentTypes().subscribe(res => {
      this.employmentTypes = res;
    });
  }

  getMinSalaries() {
    this.job.getMinSalaries().subscribe(res => {
      this.minSalaries = res;
    });
  }

  getExperienceVals() {
    this.job.getExperienceVals().subscribe(res => {
      this.experiences = res;
    });
  }

  getLocations() {
    this.job.getLocations().subscribe(res => {
      this.locations = res;
      console.log(res);
    });
  }

  getSkills() {
    this.skillSet = this.job.getSkills();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobPostPage');
  }

}

import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') singupForm: NgForm;
  defaultQuestion: string  = 'pet';
  awnser: string = '';
  genders: string[] = ['male', 'female', 'no binary'];
  user: User={
    username: '',
    email: '',
    secretQuestion: '',
    questionAwnser: '',
    gender: ''
  }

  submitted: boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.singupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }


  onSubmit( form: NgForm ){

    this.submitted = true;
    this.user.username = this.singupForm.value.userData.username;
    this.user.email = this.singupForm.value.userData.email;
    this.user.secretQuestion = this.singupForm.value.secretQuestion;
    this.user.questionAwnser = this.singupForm.value.questionAwnser;
    this.user.gender = this.singupForm.value.gender;
    this.singupForm.reset();
  }
}

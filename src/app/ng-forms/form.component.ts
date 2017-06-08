/**
 * Created by alokpandhare on 5/13/17.
 */
import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})

export class FormComponent {
  @ViewChild('f') myForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  submitted = false;
  user: any = {
    name : '',
    email: '',
    question: '',
    answer: '',
    gender: ''
}
  constructor() {}
  // onSubmitForm(form: NgForm) {
  //   console.log(form);
  // }
  onSubmitForm() {
    console.log(this.myForm);
    this.submitted = true;
    this.user.name = this.myForm.value.userInfo.username;
    this.user.email = this.myForm.value.userInfo.email;
    this.user.question = this.myForm.value.secret;
    this.user.answer = this.myForm.value.qAnswer;
    this.user.gender = this.myForm.value.gender;
  }
}

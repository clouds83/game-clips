import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
 selector: 'app-register',
 templateUrl: './register.component.html',
 styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
 registerForm = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  email: new FormControl('', [Validators.required, Validators.email]),
  age: new FormControl('', [
   Validators.required,
   Validators.min(18),
   Validators.max(120),
  ]),
  password: new FormControl('', [
   Validators.required,
   Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]),
  confirm_password: new FormControl('', [
   Validators.required,
   // Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ]),
  phoneNumber: new FormControl('', [
   Validators.required,
   Validators.minLength(12),
   Validators.maxLength(13),
  ]),
 });

 showAlert = false;
 alertMsg = 'Please wait! Your account is beign created.';
 alertColor = 'blue';

 register() {
  this.showAlert = true;
  this.alertMsg = 'Please wait! Your account is being created.';
  this.alertColor = 'blue';
 }
}

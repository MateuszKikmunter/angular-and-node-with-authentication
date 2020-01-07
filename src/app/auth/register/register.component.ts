import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { UserForCreation } from '../../core/models/user/user-for-creation-data.model';
import { AuthService } from './../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.buildForm();
  }

  public onSubmit(): void {
    this.authService.register(new UserForCreation(
      this.registerForm.get("firstName").value,
      this.registerForm.get("lastName").value,
      this.registerForm.get("email").value,
      this.registerForm.get("password").value
    ));
  }

  private buildForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: [ null, [ Validators.required, Validators.maxLength(255), Validators.minLength(3) ] ],
      lastName: [ null, [ Validators.required, Validators.maxLength(255), Validators.minLength(3) ] ],
      email: [ null, [ Validators.required, Validators.maxLength(255), Validators.minLength(3), Validators.email ] ],
      password: [ null, [ Validators.required, Validators.maxLength(255), Validators.minLength(3) ] ],
      confirmPassword: [ null, [ Validators.required, Validators.maxLength(255), Validators.minLength(3) ] ],
    }, { validator: this.passwordMatched });
  }

  private passwordMatched(form: FormGroup): object | null {
    return form.get("password").value !== form.get("confirmPassword").value
      ? { mismatchedValue: true }
      : null;
  }

}


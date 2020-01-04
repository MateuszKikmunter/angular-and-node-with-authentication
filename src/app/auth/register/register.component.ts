import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  public onSubmit(): void {
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


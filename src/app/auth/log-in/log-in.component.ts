import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../core/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  public logInForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.buildForm();
  }

  public onSubmit(): void {
    
  }

  private buildForm(): void {
    this.logInForm = this.formBuilder.group({
      email: [ null, [ Validators.required, Validators.maxLength(255), Validators.minLength(3), Validators.email ] ],
      password: [ null, [ Validators.required, Validators.maxLength(255), Validators.minLength(3) ] ],
    });
  }

}
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from "@angular/router";
import { environment } from "./../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { LoginData } from './../models/auth/login-data.model';
import { UserForCreation } from "../models/user/user-for-creation-data.model";
import { SnackService } from './snack.service';
import { UserService } from './user.service';
import { User } from './../models/user/user-data.model';

@Injectable({
  providedIn: "root"
})
export class AuthService {

  get isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(undefined);
  public readonly currentUser$: Observable<User> = this.currentUserSubject.asObservable();

  private apiUrl: string = `${environment.apiConfig.baseUrl}/${environment.apiConfig.authRoute}`;
  private tokenKey: string = "token";

  constructor(
    private http: HttpClient, 
    private router: Router, 
    private snackBar: SnackService,
    private userService: UserService
    ) {
      this.userService.getUserDetails().subscribe(user => this.currentUserSubject.next(user));
    }

  public register(user: UserForCreation) {
    this.http.post(`${this.apiUrl}/register`, user).subscribe(
      response => {
        this.authenticate(response);
        this.currentUserSubject.next(response["user"]);
      },
      error => this.handleError(error.error)
    );
  }

  public logIn(loginData: LoginData): void {
    this.http.post(`${this.apiUrl}/login`, loginData).subscribe(
      response => this.authenticate(response),
      error => this.handleError(error.error)
    );
  }

  public logOut(): void {
    localStorage.removeItem(this.tokenKey);
  }

  private authenticate(response: object): void {
    localStorage.setItem(this.tokenKey, response[this.tokenKey]);
    this.router.navigate(["/"]);
  }
  
  private handleError(errorMessage: string): void {
    this.snackBar.openSnackBar(errorMessage);
  }
}

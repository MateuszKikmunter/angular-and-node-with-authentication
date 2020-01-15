import { Router } from "@angular/router";
import { environment } from "./../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { LoginData } from './../models/auth/login-data.model';
import { UserForCreation } from "../models/user/user-for-creation-data.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  get name(): string {
    return localStorage.getItem(this.nameKey);
  }

  get isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  private apiUrl: string = `${environment.apiConfig.baseUrl}/${environment.apiConfig.authRoute}`;
  private tokenKey: string = "token";
  private nameKey: string = "firstName";

  constructor(private http: HttpClient, private router: Router) {}

  public register(user: UserForCreation) {
    this.http.post(`${this.apiUrl}/register`, user).subscribe(response => this.authenticate(response));
  }

  public logIn(loginData: LoginData): void {
    this.http.post(`${this.apiUrl}/login`, loginData).subscribe(response => this.authenticate(response));
  }

  public logOut(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.nameKey);
  }

  private authenticate(response: object): void {
    localStorage.setItem(this.tokenKey, response[this.tokenKey]);
    localStorage.setItem(this.nameKey, response[this.nameKey]);
    this.router.navigate(["/"]);
  }
}

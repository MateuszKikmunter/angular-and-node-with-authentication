import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserForCreation } from '../models/user/user-for-creation-data.model';

@Injectable({
  providedIn: 'root'
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

  constructor(private http: HttpClient) { }

  public register(user: UserForCreation) {
    this.http.post(`${this.apiUrl}/register`, user).subscribe(res => {
      localStorage.setItem(this.tokenKey, res[this.tokenKey]);
      localStorage.setItem(this.nameKey, res[this.nameKey]);
    });
  }

  public logOut(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.nameKey);
  }
}

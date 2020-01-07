import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserForCreation } from '../models/user/user-for-creation-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = `${environment.apiConfig.baseUrl}/${environment.apiConfig.authRoute}`;

  constructor(private http: HttpClient) { }

  public register(user: UserForCreation) {
    this.http.post(`${this.apiUrl}/register`, user).subscribe();
  }
}

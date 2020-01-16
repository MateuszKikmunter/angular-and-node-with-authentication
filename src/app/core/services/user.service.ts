import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './../models/user/user-data.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = `${environment.apiConfig.baseUrl}/${environment.apiConfig.userRoute}`;

  constructor(private http: HttpClient) { }

  public getUserDetails(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/me`);
  }
}

import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../core/services/auth.service';
import { User } from '../core/models/user/user-data.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  get currentUser(): Observable<User> {
    return this.authService.currentUser$;
  }

  ngOnInit() {
  }

  public logOut(): void {
    this.authService.logOut();
  }

}

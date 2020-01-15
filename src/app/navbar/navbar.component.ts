import { Component, OnInit } from '@angular/core';

import { AuthService } from './../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  get currentUser(): string {
    return this.authService.name;
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  ngOnInit() {
  }

  public logOut(): void {
    this.authService.logOut();
  }

}

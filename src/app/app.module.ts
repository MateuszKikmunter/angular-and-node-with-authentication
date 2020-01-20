//Angular imports
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './core/interceptors/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

//Application imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageModule } from './message/message.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

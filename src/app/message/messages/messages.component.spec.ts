import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MessageComponent } from './../message/message.component';
import { MessagesComponent } from './messages.component';
import { MaterialModule } from './../../material/material.module';
import { NewMessageComponent } from '../new-message/new-message.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MessagesComponent,
        NewMessageComponent,
        MessageComponent
       ],
       imports: [
         MaterialModule,
         HttpClientModule,
         SharedModule,
         ReactiveFormsModule,
         BrowserAnimationsModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

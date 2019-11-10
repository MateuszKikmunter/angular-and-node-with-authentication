//Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//3rd party imports
import { MaterialModule } from './../material/material.module';

//Application imports
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from './message/message.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MessagesComponent,
    MessageComponent,
    NewMessageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class MessageModule { }

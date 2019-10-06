//Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//3rd party imports
import { MaterialModule } from './../material/material.module';

//Application imports
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    MessagesComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class MessageModule { }

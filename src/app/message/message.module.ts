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
import { UserMessagesComponent } from './user-messages/user-messages.component';

@NgModule({
  declarations: [
    MessagesComponent,
    MessageComponent,
    NewMessageComponent,
    UserMessagesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class MessageModule { }

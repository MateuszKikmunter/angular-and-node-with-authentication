//Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//3rd party imports
import { MaterialModule } from './../material/material.module';

//Application imports
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from './message/message.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';
import { MessagesRoutingModule } from './messages-routing.module';

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
    MessagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class MessageModule { }

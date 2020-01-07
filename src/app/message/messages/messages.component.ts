import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Message } from 'src/app/core/models/message/message.data-model';
import { MessageForCreation } from './../../core/models/message/message-for-creation-data.model';
import { MessageService } from '../../core/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  get messages$(): Observable<Message[]> {
    return this.messgeService.messages$;
  }

  constructor(private messgeService: MessageService) { }

  ngOnInit() {
  }

  public onMessageAdd(message: MessageForCreation): void {
    this.messgeService.addMessage(message);
  }

}

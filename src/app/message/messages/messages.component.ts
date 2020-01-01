import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Message } from 'src/app/core/models/message.data-model';
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

  public onMessageAdd(message: Message): void {
    this.messgeService.addMessage(message);
  }

}

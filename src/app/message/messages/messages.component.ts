import { Message } from 'src/app/shared/models/message.data-model';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MessageService } from '../../core/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  get messages$(): Observable<object[]> {
    return this.messgeService.messages$;
  }

  constructor(private messgeService: MessageService) { }

  ngOnInit() {
  }

  public onMessageAdd(message: Message): void {
    this.messgeService.addMessage(message);
  }

}

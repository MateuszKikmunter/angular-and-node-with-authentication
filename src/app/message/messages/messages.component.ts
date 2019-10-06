import { MessageService } from '../../core/services/message.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

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

}

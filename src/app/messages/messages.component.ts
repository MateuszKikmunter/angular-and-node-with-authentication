import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  get messages(): object[] {
    return [
      { text: "hello", owner: "Matt" },
      { text: "duck!! duck!!", owner: "Ducky" },
      { text: "you shall not pass!", owner: "Gandalf" },
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}

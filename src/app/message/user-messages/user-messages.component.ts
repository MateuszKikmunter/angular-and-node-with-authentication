import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";

import { MessageService } from "./../../core/services/message.service";
import { Message } from "src/app/core/models/message.data-model";

@Component({
  selector: "app-user-messages",
  templateUrl: "./user-messages.component.html",
  styleUrls: ["./user-messages.component.scss"]
})
export class UserMessagesComponent implements OnInit {

  public userMessages$: Observable<Message[]>;
  public currentUser: string;

  constructor(
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const username: string = this.activatedRoute.snapshot.params["username"];
    if (username) {
      this.currentUser = username;
      this.userMessages$ = this.messageService.messages$.pipe(
        map((messages: Message[]) =>
          messages.filter((message: Message) => {
            if (message.owner === username) {
              return message;
            }
          })
        )
      );
    }
  }
}

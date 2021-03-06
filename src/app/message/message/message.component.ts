import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

import { Message } from "src/app/core/models/message/message.data-model";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"]
})
export class MessageComponent implements OnInit {
  @Input() message: Message = null;

  constructor(private router: Router) {}

  ngOnInit() {}

  public getUserMessages(): void {
    this.router.navigateByUrl(`messages/${this.message.owner}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { MessageService } from 'src/app/core/services/message.service';
import { Message } from 'src/app/shared/models/message.data-model';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {

  public messageForm: FormGroup;

  constructor(
    private messageService: MessageService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  public saveMessage(): void {
    if (this.messageForm.valid) {
      const message: Message = {
        owner: this.messageForm.get("messageOwner").value,
        content: this.messageForm.get("messageContent").value
      };

      this.messageService.addMessage(message);
    }
  }

  private buildForm(): void {
    if (!this.messageForm)
      this.messageForm = this.formBuilder.group({
        messageOwner: new FormControl(null, [Validators.required]),
        messageContent: new FormControl(null, [Validators.required])
      });
  }

}

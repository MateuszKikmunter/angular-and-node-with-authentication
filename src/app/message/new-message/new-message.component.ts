import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { MessageForCreation } from './../../core/models/message/message-for-creation-data.model';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {

  public messageForm: FormGroup;

  get messageOwner(): AbstractControl {
    return this.messageForm.get("messageOwner");
  }

  get messageContent(): AbstractControl {
    return this.messageForm.get("messageContent");
  }

  @Output() messageAdd: EventEmitter<MessageForCreation> = new EventEmitter<MessageForCreation>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  public saveMessage(): void {
    if (this.messageForm.valid) {
      const message: MessageForCreation = {
        owner: this.messageOwner.value,
        content: this.messageContent.value
      };

      this.messageAdd.emit(message);
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

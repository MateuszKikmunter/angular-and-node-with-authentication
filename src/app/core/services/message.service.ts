import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';

import { environment } from './../../../environments/environment';
import { Message } from 'src/app/core/models/message/message.data-model';
import { MessageForCreation } from './../models/message/message-for-creation-data.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiUrl: string = `${environment.apiConfig.baseUrl}/${environment.apiConfig.baseRoute}/messages`;

  private messageSubject: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);
  public readonly messages$: Observable<Message[]> = this.messageSubject.asObservable();

  private dataStore: { messages: Message[] } = { messages: [] };

  constructor(private http: HttpClient) {
    this.http.get<Message[]>(this.apiUrl).subscribe(data => {
      this.dataStore.messages = data;
      this.messageSubject.next(this.dataStore.messages);
    });
  }

  public addMessage(messageToAdd: MessageForCreation): void {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
    });

    this.http.post<Message>(this.apiUrl, messageToAdd, { headers: headers }).subscribe(message => {
      this.dataStore.messages = [...this.dataStore.messages, message];
      this.messageSubject.next(this.dataStore.messages);
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';

import { Message } from 'src/app/core/models/message.data-model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiUrl: string = `http://localhost:4201/api/messages`;

  private messageSubject: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);
  public readonly messages$: Observable<Message[]> = this.messageSubject.asObservable();

  private dataStore: { messages: Message[] } = { messages: [] };

  constructor(private http: HttpClient) {
    this.http.get<Message[]>(this.apiUrl).subscribe(data => {
      this.dataStore.messages = data;
      this.messageSubject.next(this.dataStore.messages);
    });
  }

  public addMessage(message: Message): void {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
    });

    this.http.post<Message>(this.apiUrl, message, { headers: headers }).subscribe(message => {
      this.dataStore.messages = [...this.dataStore.messages, message];
      this.messageSubject.next(this.dataStore.messages);
    });
  }
}

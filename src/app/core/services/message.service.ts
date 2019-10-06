import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiUrl: string = `http://localhost:4201/messages`;

  private messageSubject: BehaviorSubject<object[]> = new BehaviorSubject<object[]>([]);
  public readonly messages$: Observable<object[]> = this.messageSubject.asObservable();

  constructor(private http: HttpClient) {
    this.http.get<object[]>(this.apiUrl).subscribe(data => this.messageSubject.next(data));
   }
}

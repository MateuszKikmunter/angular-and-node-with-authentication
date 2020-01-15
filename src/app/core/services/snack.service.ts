import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private snackBar: MatSnackBar) { }

  public openSnackBar(message: string): void {
    this.snackBar.open(message, null, {
      duration: 2000
    });
  }
}

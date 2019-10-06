//Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Application imports
import { MessagesComponent } from './message/messages/messages.component';

const routes: Routes = [
  { path: "index", component: MessagesComponent },
  { path: "**", redirectTo: "index", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

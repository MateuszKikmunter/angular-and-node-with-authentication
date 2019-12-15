//Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Application imports
import { MessagesComponent } from './message/messages/messages.component';
import { UserMessagesComponent } from './message/user-messages/user-messages.component';

const routes: Routes = [
  { path: "messages", component: MessagesComponent },
  { path: "user-messages/:username", component: UserMessagesComponent },
  { path: "**", redirectTo: "messages", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

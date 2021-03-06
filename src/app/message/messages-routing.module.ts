import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { UserMessagesComponent } from "./user-messages/user-messages.component";

const messagesRoutes: Routes = [
  {
    path: "",
    component: MessagesComponent,
  },
  {
    path: ":username",
    component: UserMessagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(messagesRoutes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule {}

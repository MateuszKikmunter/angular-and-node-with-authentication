//Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "messages",
    loadChildren: () => import("./message/message.module").then(module => module.MessageModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(module => module.AuthModule)
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

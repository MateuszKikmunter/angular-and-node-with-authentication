import { RegisterComponent } from "./register/register.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const authRoutes: Routes = [
  {
    path: "register",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}

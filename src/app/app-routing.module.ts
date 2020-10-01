import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddFlightDetailsComponent } from './add-flight-details/add-flight-details.component';
import { ErrorComponent } from "./error/error.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRegisterComponent } from "./user-register/user-register.component";

const routes: Routes = [
  { path: "", redirectTo: "/userLogin", pathMatch: "full" },
  { path: "userLogin", component: UserLoginComponent },
  { path: "addUser", component: UserRegisterComponent },
  { path: "error/:message", component: ErrorComponent },
  { path: "addFlightDetails", component: AddFlightDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

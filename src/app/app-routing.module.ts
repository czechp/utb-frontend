import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home/home-page/home-page.component";
import {PageNotFoundComponent} from "./wildcard/page-not-found/page-not-found.component";
import {LoginRequiredComponent} from "./wildcard/login-required/login-required.component";
import {LoginPageComponent} from "./authorization/pages/login-page/login-page.component";
import {LoginGuard} from "./configuration/guards/login.guard";
import {RegistrationPageComponent} from "./authorization/pages/registration-page/registration-page.component";
import {
  VerificationTokenPageComponent
} from "./authorization/pages/verification-token-page/verification-token-page.component";
import {UsersPageComponent} from "./authorization/pages/users-page/users-page.component";
import {ForbiddenComponent} from "./wildcard/forbidden/forbidden.component";
import {AdminGuard} from "./configuration/guards/admin.guard.service";
import {UserDetailsPageComponent} from "./authorization/pages/user-details-page/user-details-page.component";
import {CartsListPageComponent} from "./cart/pages/carts-list-page/carts-list-page.component";
import {CartDetailsPageComponent} from "./cart/pages/cart-details-page/cart-details-page.component";
import {CartAddPageComponent} from "./cart/pages/cart-add-page/cart-add-page.component";
import {
  ChargingSystemCreatePageComponent
} from "./chargingSystem/pages/charging-system-create-page/charging-system-create-page.component";
import {
  ChargingSystemDetailsPageComponent
} from "./chargingSystem/pages/charging-system-details-page/charging-system-details-page.component";
import {AlarmsPageComponent} from "./alarms/pages/alarms-page/alarms-page.component";
import {AlarmDetailsPageComponent} from "./alarms/pages/alarm-details-page/alarm-details-page.component";
import {NotificationsPageComponent} from "./notifications/pages/notifications-page/notifications-page.component";
import {
  ChargingSystemsPageComponent
} from "./chargingSystem/pages/chargins-systems-page/charging-systems-page/charging-systems-page.component";
import {
  CurrentMeasureChargerPageComponent
} from "./current-measures/page/current-measure-charger-page/current-measure-charger-page.component";
import {ReportsPageComponent} from "./report/page/reports-page/reports-page.component";
import {
  AlarmsConnectionErrorPageComponent
} from "./alarms/pages/alarms-connection-error-page/alarms-connection-error-page.component";

const routes: Routes = [
  {path: "", component: HomePageComponent, canActivate: [LoginGuard]},
  {path: "charger-measures/:id", component: CurrentMeasureChargerPageComponent, canActivate: [LoginGuard]},
  {path: "login", component: LoginPageComponent},
  {path: "registration", component: RegistrationPageComponent},
  {path: "verification-token", component: VerificationTokenPageComponent},
  {path: "users", component: UsersPageComponent, canActivate: [LoginGuard, AdminGuard]},
  {path: "charging-systems", component: ChargingSystemsPageComponent, canActivate: [LoginGuard, AdminGuard]},
  {path: "user-details/:id", component: UserDetailsPageComponent, canActivate: [LoginGuard, AdminGuard]},
  {path: "carts", component: CartsListPageComponent, canActivate: [LoginGuard]},
  {path: "cart-details/:id", component: CartDetailsPageComponent, canActivate: [LoginGuard]},
  {path: "cart-add", component: CartAddPageComponent, canActivate: [LoginGuard]},
  {path: "charging-system-create", component: ChargingSystemCreatePageComponent, canActivate: [LoginGuard]},
  {path: "charging-system-details/:id", component: ChargingSystemDetailsPageComponent, canActivate: [LoginGuard]},
  {path: "alarms", component: AlarmsPageComponent, canActivate: [LoginGuard]},
  {path: "connection-alarms", component: AlarmsConnectionErrorPageComponent, canActivate: [LoginGuard]},
  {path: "alarm-details/:id", component: AlarmDetailsPageComponent, canActivate: [LoginGuard]},
  {path: "notifications", component: NotificationsPageComponent, canActivate: [LoginGuard]},
  {path: "reports", component: ReportsPageComponent, canActivate: [LoginGuard]},
  {path: "forbidden", component: ForbiddenComponent},
  {path: "login-required", component: LoginRequiredComponent},
  {path: "not-found", component: PageNotFoundComponent},
  {path: "**", redirectTo: "/not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

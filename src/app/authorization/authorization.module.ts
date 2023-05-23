import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";
import {RegistrationFormComponent} from "./components/registration-form/registration-form.component";
import {VerificationTokenPageComponent} from "./pages/verification-token-page/verification-token-page.component";
import {VerificationTokenFormComponent} from "./components/verification-token-form/verification-token-form.component";
import {SharedModule} from "../shared.module";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {UsersPageComponent} from './pages/users-page/users-page.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import {UserDetailsPageComponent} from './pages/user-details-page/user-details-page.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {UserRemoveComponent} from './components/user-remove/user-remove.component';
import {UserAssignRoleFormComponent} from './components/user-assign-role-form/user-assign-role-form.component';
import {UserActivationComponent} from './components/user-activation/user-activation.component';


@NgModule({
  declarations: [
    LoginFormComponent,
    RegistrationPageComponent,
    RegistrationFormComponent,
    VerificationTokenPageComponent,
    VerificationTokenFormComponent,
    LoginPageComponent,
    UsersPageComponent,
    UsersListComponent,
    UserDetailsPageComponent,
    UserInfoComponent,
    UserRemoveComponent,
    UserAssignRoleFormComponent,
    UserActivationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: []
})
export class AuthorizationModule {
}

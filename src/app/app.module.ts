import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FOneTeamComponent } from './components/f-one-team/f-one-team.component';
import { FOneDriversComponent } from './components/f-one-drivers/f-one-drivers.component';
import { HttpClientModule } from '@angular/common/http';
import { FOneTeamServiceService } from './service/f-one-team-service/f-one-team-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FOneSingleTeamComponent } from './components/f-one-single-team/f-one-single-team.component';
import { FOneAddTeamComponent } from './components/f-one-add-team/f-one-add-team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FOneHomeComponent } from './component/f-one-home/f-one-home.component';
import { FOneUpdateTeamComponent } from './components/f-one-update-team/f-one-update-team.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FOneDeleteTeamComponent } from './components/f-one-delete-team/f-one-delete-team.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { AllUsersAdminComponent } from './components/users/all-users-admin/all-users-admin.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FOneTeamComponent,
    FOneDriversComponent,
    FOneSingleTeamComponent,
    FOneAddTeamComponent,
    FOneHomeComponent,
    FOneUpdateTeamComponent,
    NavbarComponent,
    FOneDeleteTeamComponent,
    AddUserComponent,
    AllUsersAdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FOneTeamServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

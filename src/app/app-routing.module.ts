import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FOneHomeComponent } from './component/f-one-home/f-one-home.component';
import { FOneAddTeamComponent } from './components/f-one-add-team/f-one-add-team.component';
import { FOneDeleteTeamComponent } from './components/f-one-delete-team/f-one-delete-team.component';
import { FOneSingleTeamComponent } from './components/f-one-single-team/f-one-single-team.component';
import { FOneTeamComponent } from './components/f-one-team/f-one-team.component';
import { FOneUpdateTeamComponent } from './components/f-one-update-team/f-one-update-team.component';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { AllUsersAdminComponent } from './components/users/all-users-admin/all-users-admin.component';

const routes: Routes = [
  {
    path:'home', component: FOneHomeComponent
  },
  {
    path:'', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'adduser',
    component: AddUserComponent
  },
  {
    path: 'teams',
    component: FOneTeamComponent
  },
  {
    path: 'teams/:id',
    component: FOneSingleTeamComponent
  },
  {
    path: 'teams/:id/updateteam',
    component: FOneUpdateTeamComponent
  },
  {
    path: 'teams/:id/deleteteam',
    component: FOneDeleteTeamComponent
  },
  {
    path: 'addteam',
    component: FOneAddTeamComponent
  },
  {
    path: 'usersadmin',
    component: AllUsersAdminComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

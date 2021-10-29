import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FOneHomeComponent } from './component/f-one-home/f-one-home.component';
import { FOneAddTeamComponent } from './components/f-one-add-team/f-one-add-team.component';
import { FOneSingleTeamComponent } from './components/f-one-single-team/f-one-single-team.component';
import { FOneTeamComponent } from './components/f-one-team/f-one-team.component';
import { FOneUpdateTeamComponent } from './components/f-one-update-team/f-one-update-team.component';

const routes: Routes = [
  {
    path:'home', component: FOneHomeComponent
  },
  {
    path:'', redirectTo: 'home', pathMatch: 'full'
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
    path: 'addteam',
    component: FOneAddTeamComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

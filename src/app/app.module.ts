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
import { ReactiveFormsModule } from '@angular/forms';
import { FOneHomeComponent } from './component/f-one-home/f-one-home.component';

@NgModule({
  declarations: [
    AppComponent,
    FOneTeamComponent,
    FOneDriversComponent,
    FOneSingleTeamComponent,
    FOneAddTeamComponent,
    FOneHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [FOneTeamServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

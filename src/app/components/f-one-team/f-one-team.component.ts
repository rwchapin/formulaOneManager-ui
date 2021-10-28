import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FOneTeamServiceService } from 'src/app/service/f-one-team-service/f-one-team-service.service';
import { FOneTeam } from './f-one-team';

@Component({
  selector: 'app-f-one-team',
  templateUrl: './f-one-team.component.html',
  styleUrls: ['./f-one-team.component.css']
})
export class FOneTeamComponent implements OnInit {

  teams: FOneTeam[] = [];
  drivers = [];

  constructor(private router: Router, private fOneTeamService: FOneTeamServiceService, private elementRef: ElementRef) { }

  getAllTeams() {
    this.fOneTeamService.getAllTeams().subscribe(data => {
      this.teams = data;
    });
  }

  ngOnInit(): void {
    this.getAllTeams();
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundImage = 'url("./assets/f1track.jpg")';

        this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundSize = "100%";  
}

}

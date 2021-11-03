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

  private _filterSelect: string = "teamName";
  get filterSelect(): string {
    return this._filterSelect;
  }
  set filterSelect(value: string){
    this._filterSelect = value;
    console.log(this._filterSelect);
  }
  private _listFilter: string = "";
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredTeams = this.performFilter(value);
  }

  teams: FOneTeam[] = [];
  filteredTeams: FOneTeam[] = [];

  constructor(private router: Router, private fOneTeamService: FOneTeamServiceService, private elementRef: ElementRef) { }

  performFilter(filterBy: string): FOneTeam[]{
    filterBy = filterBy.toLocaleLowerCase();
    if(this._filterSelect === "teamName"){
    return this.teams.filter((team: FOneTeam) =>
    team.teamName.toLocaleLowerCase().includes(filterBy));
    } else if(this._filterSelect === "engineManufacturer"){
      return this.teams.filter((team: FOneTeam) =>
    team.engineManufacturer.toLocaleLowerCase().includes(filterBy));
    }else {
      return this.filteredTeams;
    }
  }

  getAllTeams() {
    this.fOneTeamService.getAllTeams().subscribe(data => {
      this.teams = data;
      this.filteredTeams = this.teams;
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

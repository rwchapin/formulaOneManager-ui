import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FOneTeamServiceService } from 'src/app/service/f-one-team-service/f-one-team-service.service';
import { FOneTeam } from '../f-one-team/f-one-team';

@Component({
  selector: 'app-f-one-single-team',
  templateUrl: './f-one-single-team.component.html',
  styleUrls: ['./f-one-single-team.component.css']
})
export class FOneSingleTeamComponent implements OnInit {

  team: any;

  constructor(private fOneTeamService: FOneTeamServiceService, private route: ActivatedRoute, private router: Router) { }

  getTeam(id: number){
    return this.fOneTeamService.getTeam(id).subscribe(data => {
      this.team = data;
      //console.log(this.team);
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //console.log("id " + id);

    this.getTeam(id);
  }

  onBack(): void{
    this.router.navigate(['/teams'])
  }

}

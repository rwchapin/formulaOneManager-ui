import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FOneTeamServiceService } from 'src/app/service/f-one-team-service/f-one-team-service.service';

@Component({
  selector: 'app-f-one-delete-team',
  templateUrl: './f-one-delete-team.component.html',
  styleUrls: ['./f-one-delete-team.component.css']
})
export class FOneDeleteTeamComponent implements OnInit {

  constructor(private fOneTeamService: FOneTeamServiceService, private route: ActivatedRoute, private router: Router) { }

  deleteTeam(id: number){
   let yesDelete: boolean = confirm('Are you sure you want to delete the team?');
   alert(yesDelete);

   if(yesDelete){
    return this.fOneTeamService.deleteTeam(id).subscribe(data => {
      this.router.navigate(['teams']);
    });
    } else{
      return this.router.navigate(['teams']);
    }
  }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.deleteTeam(id);

  }

}

import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { FOneTeamServiceService } from 'src/app/service/f-one-team-service/f-one-team-service.service';

@Component({
  selector: 'app-f-one-update-team',
  templateUrl: './f-one-update-team.component.html',
  styleUrls: ['./f-one-update-team.component.css']
})
export class FOneUpdateTeamComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, 
    private fOneTeamService: FOneTeamServiceService, private elementRef: ElementRef, private route: ActivatedRoute) { }

    id!: number;
    addForm!: FormGroup;
    team: any;
    oneTeam: any;

    getTeam(id: number){
      this.team = this.fOneTeamService.getTeam(id).pipe(tap(team => this.addForm.patchValue(team)));
      this.fOneTeamService.getTeam(id).subscribe(data => {
      this.oneTeam = data;
    });
      return this.team;
    }

    get drivers(){
      return this.addForm.get('drivers') as FormArray;
    }

    newDriver(): FormGroup{
      return this.formBuilder.group({
        name: '',
        driverNumber: '',
        nationality: '',
        driverPoints: ''
      });
    }

    addDriver(){
      this.drivers.push(this.newDriver());
    }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id:[],
      teamName: [""],
      engineManufacturer: [""],
      chassis: [""],
      constructorPoints: [""],
      imgSrc: [""],
      drivers: this.formBuilder.array([])
    });
    
    this.addDriver();
    this.addDriver();

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.getTeam(this.id);
    
  }

  onSubmit() {
    this.fOneTeamService.updateTeam(this.id, this.addForm.value).subscribe(
      data => {
        this.router.navigate(['teams']);
      });
      console.log(this.addForm.value);
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundImage = 'url("./assets/f1track.jpg")';

        this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundSize = "100%";  
}

}

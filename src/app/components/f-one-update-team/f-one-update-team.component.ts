import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { FOneDriversServiceService } from 'src/app/service/f-one-drivers-service/f-one-drivers-service.service';
import { FOneTeamServiceService } from 'src/app/service/f-one-team-service/f-one-team-service.service';
import { FOneTeam } from '../f-one-team/f-one-team';
import { FOneTeamComponent } from '../f-one-team/f-one-team.component';

@Component({
  selector: 'app-f-one-update-team',
  templateUrl: './f-one-update-team.component.html',
  styleUrls: ['./f-one-update-team.component.css']
})
export class FOneUpdateTeamComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, 
    private fOneTeamService: FOneTeamServiceService, private fOneDriverService: FOneDriversServiceService, private elementRef: ElementRef, private route: ActivatedRoute) { }

    id!: number;
    addForm!: FormGroup;
    addFormDri!: FormGroup;
    addFormDri2!: FormGroup;
    team: any;
    oneTeam!: any;
    drivers: any = [];
    driverIds: any = [];
    driver: any;

    getTeam(id: number){
      this.team = this.fOneTeamService.getTeam(id).pipe(tap(team => this.addForm.patchValue(team)));
      this.fOneTeamService.getTeam(id).subscribe(data => {
      this.oneTeam = data;
    });
      return this.team;
    }

    getDrivers(id: number){
      this.fOneTeamService.getTeam(id).subscribe(data => {
        this.drivers = data.drivers;
        for(let driver of data.drivers){
          this.driverIds.push(driver.id);
        }
      });
      
    }
    
  

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id:[],
      teamName: [""],
      engineManufacturer: [""],
      chassis: [""],
      constructorPoints: [""],
      imgSrc: [""]
    });

    this.addFormDri = this.formBuilder.group({
      id: [],
      name: [""],
      driverNumber: [""],
      nationality: [""],
      driverPoints: [""]
    });

    this.addFormDri2 = this.formBuilder.group({
      id: [],
      name: [""],
      driverNumber: [""],
      nationality: [""],
      driverPoints: [""]
    });
    
    

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.getTeam(this.id);
    this.getDrivers(this.id);
    
    
  }


  onSubmit() {
    this.fOneTeamService.updateTeam(this.id, this.addForm.value).subscribe(
      data => {
        this.router.navigate(['teams']);
      });
      console.log(this.addForm.value);
  }

  onDriver1Submit(dId: any){
    this.fOneDriverService.updateDriver(dId, this.addFormDri.value).subscribe(
      data => {
        this.router.navigate(['teams']);
      });
    console.log("Driver id is " + dId);
  }

  onDriver2Submit(dId: any){
    this.fOneDriverService.updateDriver(dId, this.addFormDri2.value).subscribe(
      data => {
        this.router.navigate(['teams']);
      });
    console.log("Driver id is " + dId);
  }


  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundImage = 'url("./assets/f1track.jpg")';

        this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundSize = "100%";  
}

}

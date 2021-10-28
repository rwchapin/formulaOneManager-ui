import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FOneTeamServiceService } from 'src/app/service/f-one-team-service/f-one-team-service.service';

@Component({
  selector: 'app-f-one-add-team',
  templateUrl: './f-one-add-team.component.html',
  styleUrls: ['./f-one-add-team.component.css']
})
export class FOneAddTeamComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, 
    private fOneTeamService: FOneTeamServiceService) { }

    addForm!: FormGroup;

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

    console.log(this.addForm);
    
  }

  onSubmit() {
    this.fOneTeamService.addTeam(this.addForm.value).subscribe(
      data => {
        this.router.navigate(['teams']);
      });
      console.log(this.addForm.value);
  }

}

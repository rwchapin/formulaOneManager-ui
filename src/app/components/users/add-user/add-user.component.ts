import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user-service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router,
    private elementRef: ElementRef) { }

    addForm!: FormGroup;


  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [],
      name: [""],
      username: [""],
      password: [""],
      role: [""]
    })
  }

  onSubmit() {
    this.userService.addUser(this.addForm.value).subscribe(
      data => {this.router.navigate(['teams']);}
    )
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundImage = 'url("./assets/f1track2.jpg")';

        this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundSize = "100%";  
  }

}

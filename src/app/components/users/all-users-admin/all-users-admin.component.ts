import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user-service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-all-users-admin',
  templateUrl: './all-users-admin.component.html',
  styleUrls: ['./all-users-admin.component.css']
})
export class AllUsersAdminComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService, private router: Router, 
    private elementRef: ElementRef) { }

    getAllUsers() {
      this.userService.getAllUsers().subscribe(data => {
        this.users = data;
      });
    }

  ngOnInit(): void {
    this.getAllUsers();
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundImage = 'url("./assets/f1track2.jpg")';

        this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundSize = "100%";  
  }

}

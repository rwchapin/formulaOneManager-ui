import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  time!: any;

  
  
  constructor(){
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  date: string = this.setDayOfWeek() + ", " +this.setMonth() + " " + this.setDay();

  setDayOfWeek() {
    let date = new Date();
    let options: any = { weekday: 'long' };
    let day = new Intl.DateTimeFormat('en-US', options).format(date);
    return day;
  }

  setMonth(){
    let date = new Date();
    let options: any = { month: 'long'};
    let month = new Intl.DateTimeFormat('en-US', options).format(date);
    return month;
  }

  setDay(){
    let day = String(new Date().getDate());
    if(Number(day) > 3 && Number(day) < 21){
      day = day + "th";
    }
    switch(Number(day) % 10){
      case 1: 
        day = day + "st";
        break;
      case 2:
        day = day + "nd";
        break;
      case 3:
        day = day + "rd";
        break;
      default:
        day = day + "th";
        break;
    }
    return day;
  }

  ngOnInit(): void {
  }

}

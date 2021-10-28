import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-one-home',
  templateUrl: './f-one-home.component.html',
  styleUrls: ['./f-one-home.component.css']
})
export class FOneHomeComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundImage = 'url("./assets/f1-1.jpg")';
}

}

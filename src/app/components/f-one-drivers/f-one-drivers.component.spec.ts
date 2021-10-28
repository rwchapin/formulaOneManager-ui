import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOneDriversComponent } from './f-one-drivers.component';

describe('FOneDriversComponent', () => {
  let component: FOneDriversComponent;
  let fixture: ComponentFixture<FOneDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FOneDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FOneDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOneHomeComponent } from './f-one-home.component';

describe('FOneHomeComponent', () => {
  let component: FOneHomeComponent;
  let fixture: ComponentFixture<FOneHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FOneHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FOneHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

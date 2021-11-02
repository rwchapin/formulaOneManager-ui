import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOneDeleteTeamComponent } from './f-one-delete-team.component';

describe('FOneDeleteTeamComponent', () => {
  let component: FOneDeleteTeamComponent;
  let fixture: ComponentFixture<FOneDeleteTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FOneDeleteTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FOneDeleteTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

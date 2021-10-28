import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOneSingleTeamComponent } from './f-one-single-team.component';

describe('FOneSingleTeamComponent', () => {
  let component: FOneSingleTeamComponent;
  let fixture: ComponentFixture<FOneSingleTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FOneSingleTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FOneSingleTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOneUpdateTeamComponent } from './f-one-update-team.component';

describe('FOneUpdateTeamComponent', () => {
  let component: FOneUpdateTeamComponent;
  let fixture: ComponentFixture<FOneUpdateTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FOneUpdateTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FOneUpdateTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

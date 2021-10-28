import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOneAddTeamComponent } from './f-one-add-team.component';

describe('FOneAddTeamComponent', () => {
  let component: FOneAddTeamComponent;
  let fixture: ComponentFixture<FOneAddTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FOneAddTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FOneAddTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

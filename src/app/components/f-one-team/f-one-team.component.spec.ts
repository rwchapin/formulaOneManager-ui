import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOneTeamComponent } from './f-one-team.component';

describe('FOneTeamComponent', () => {
  let component: FOneTeamComponent;
  let fixture: ComponentFixture<FOneTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FOneTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FOneTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

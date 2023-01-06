import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualDashboardStatsComponent } from './annual-dashboard-stats.component';

describe('AnnualDashboardStatsComponent', () => {
  let component: AnnualDashboardStatsComponent;
  let fixture: ComponentFixture<AnnualDashboardStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualDashboardStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualDashboardStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

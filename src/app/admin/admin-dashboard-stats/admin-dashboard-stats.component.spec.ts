import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardStatsComponent } from './admin-dashboard-stats.component';

describe('AdminDashboardStatsComponent', () => {
  let component: AdminDashboardStatsComponent;
  let fixture: ComponentFixture<AdminDashboardStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

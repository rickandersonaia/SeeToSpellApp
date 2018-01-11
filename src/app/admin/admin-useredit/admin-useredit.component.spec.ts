import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserEditComponent } from './admin-useredit.component';

describe('AdminUserEditComponent', () => {
  let component: AdminUserEditComponent;
  let fixture: ComponentFixture<AdminUserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

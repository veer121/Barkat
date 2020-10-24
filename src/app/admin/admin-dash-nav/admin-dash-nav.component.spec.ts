import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashNavComponent } from './admin-dash-nav.component';

describe('AdminDashNavComponent', () => {
  let component: AdminDashNavComponent;
  let fixture: ComponentFixture<AdminDashNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

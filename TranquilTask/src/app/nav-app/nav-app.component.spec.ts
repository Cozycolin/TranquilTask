import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAppComponent } from './nav-app.component';

describe('NavAppComponent', () => {
  let component: NavAppComponent;
  let fixture: ComponentFixture<NavAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavAppComponent]
    });
    fixture = TestBed.createComponent(NavAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

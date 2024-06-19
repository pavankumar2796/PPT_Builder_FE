import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpaswdComponent } from './forgetpaswd.component';

describe('ForgetpaswdComponent', () => {
  let component: ForgetpaswdComponent;
  let fixture: ComponentFixture<ForgetpaswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetpaswdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetpaswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

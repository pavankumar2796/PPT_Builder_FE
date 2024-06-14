import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpverifypswdComponent } from './otpverifypswd.component';

describe('OtpverifypswdComponent', () => {
  let component: OtpverifypswdComponent;
  let fixture: ComponentFixture<OtpverifypswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpverifypswdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpverifypswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

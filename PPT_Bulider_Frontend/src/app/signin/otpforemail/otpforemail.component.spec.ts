import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpforemailComponent } from './otpforemail.component';

describe('OtpforemailComponent', () => {
  let component: OtpforemailComponent;
  let fixture: ComponentFixture<OtpforemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpforemailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpforemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

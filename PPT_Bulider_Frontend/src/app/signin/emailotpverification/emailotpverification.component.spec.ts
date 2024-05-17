import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailotpverificationComponent } from './emailotpverification.component';

describe('EmailotpverificationComponent', () => {
  let component: EmailotpverificationComponent;
  let fixture: ComponentFixture<EmailotpverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailotpverificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailotpverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

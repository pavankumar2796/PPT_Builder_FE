import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidemailComponent } from './validemail.component';

describe('ValidemailComponent', () => {
  let component: ValidemailComponent;
  let fixture: ComponentFixture<ValidemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidemailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

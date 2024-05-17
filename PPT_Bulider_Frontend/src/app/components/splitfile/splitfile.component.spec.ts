import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitfileComponent } from './splitfile.component';

describe('SplitfileComponent', () => {
  let component: SplitfileComponent;
  let fixture: ComponentFixture<SplitfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

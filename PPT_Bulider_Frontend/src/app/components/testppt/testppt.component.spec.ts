import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpptComponent } from './testppt.component';

describe('TestpptComponent', () => {
  let component: TestpptComponent;
  let fixture: ComponentFixture<TestpptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestpptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestpptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

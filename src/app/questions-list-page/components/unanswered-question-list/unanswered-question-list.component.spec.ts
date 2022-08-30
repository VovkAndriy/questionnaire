import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnansweredQuestionListComponent } from './unanswered-question-list.component';

describe('UnansweredQuestionListComponent', () => {
  let component: UnansweredQuestionListComponent;
  let fixture: ComponentFixture<UnansweredQuestionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnansweredQuestionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnansweredQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

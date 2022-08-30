import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsweredQuestionsListComponent } from './answered-questions-list.component';

describe('AnsweredQuestionsListComponent', () => {
  let component: AnsweredQuestionsListComponent;
  let fixture: ComponentFixture<AnsweredQuestionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnsweredQuestionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsweredQuestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

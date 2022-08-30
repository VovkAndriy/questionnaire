import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsListsPageComponent } from './questions-lists-page.component';

describe('QuestionsListPageComponent', () => {
  let component: QuestionsListsPageComponent;
  let fixture: ComponentFixture<QuestionsListsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionsListsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsListsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuestionService } from '../../../question.service';
import { Question } from '../../../shared/interfaces/question';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-questions-lists-page',
  templateUrl: './questions-lists-page.component.html',
  styleUrls: ['./questions-lists-page.component.scss'],
})
export class QuestionsListsPageComponent implements OnInit, OnDestroy {
  public unAnsweredQuestionsList: Question[] = [];
  public answeredQuestionsList: Question[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private questionService: QuestionService) {}

  public ngOnInit(): void {
    this.subscription = this.questionService.allQuestions$.subscribe(
      (questions: Question[]) => {
        this.answeredQuestionsList = [];
        this.unAnsweredQuestionsList = [];

        questions.forEach((question: Question) => {
          if (question.isAnswered) {
            this.answeredQuestionsList.push(question);
          } else {
            this.unAnsweredQuestionsList.push(question);
          }
        });
      }
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

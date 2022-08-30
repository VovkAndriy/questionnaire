import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Question } from './shared/interfaces/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private questionLitSubject$: BehaviorSubject<Question[]> =
    new BehaviorSubject<Question[]>(QuestionService.getQuestionsFromLS());
  public allQuestions$: Observable<Question[]> =
    this.questionLitSubject$.asObservable();

  constructor() {
    this.updateLS();
  }

  public updateQuestionsList(question: Question): void {
    let allQuestions = this.questionLitSubject$.getValue();

    allQuestions = allQuestions.filter(
      (questionItem: Question) => questionItem.id !== question.id
    );

    allQuestions.unshift(question);
    this.questionLitSubject$.next(allQuestions);
  }

  public removeQuestion(id: number): void {
    let allQuestions = this.questionLitSubject$.getValue();

    allQuestions = allQuestions.filter(
      (questionItem: Question) => questionItem.id !== id
    );

    this.questionLitSubject$.next(allQuestions);
  }

  public findQuestionById(id: number): Question | undefined {
    return this.questionLitSubject$
      .getValue()
      .find((question: Question) => question.id === id);
  }

  private updateLS(): void {
    this.allQuestions$.subscribe((questions: Question[]) => {
      localStorage.setItem('questions', JSON.stringify(questions));
    });
  }

  private static getQuestionsFromLS(): Question[] {
    return JSON.parse(localStorage.getItem('questions') || '[]');
  }
}

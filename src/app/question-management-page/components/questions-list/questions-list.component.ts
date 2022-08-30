import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../question.service';
import { Observable } from 'rxjs';
import { Question } from '../../../shared/interfaces/question';

@Component({
  selector: 'app-question-to-answer-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss'],
})
export class QuestionsListComponent implements OnInit {
  public questions$: Observable<Question[]> = new Observable<Question[]>();

  constructor(private questionService: QuestionService) {}

  public ngOnInit(): void {
    this.questions$ = this.questionService.allQuestions$;
  }
}

import { Component, Input } from '@angular/core';
import { Question } from '../../../shared/interfaces/question';

@Component({
  selector: 'app-unanswered-question-list',
  templateUrl: './unanswered-question-list.component.html',
  styleUrls: ['./unanswered-question-list.component.scss'],
})
export class UnansweredQuestionListComponent {
  @Input() public questionList: Question[] = [];
}

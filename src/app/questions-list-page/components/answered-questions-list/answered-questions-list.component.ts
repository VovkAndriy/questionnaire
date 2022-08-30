import { Component, Input } from '@angular/core';
import { Question } from '../../../shared/interfaces/question';

@Component({
  selector: 'app-answered-questions-list',
  templateUrl: './answered-questions-list.component.html',
  styleUrls: ['./answered-questions-list.component.scss'],
})
export class AnsweredQuestionsListComponent {
  @Input() public questionList: Question[] = [];
}

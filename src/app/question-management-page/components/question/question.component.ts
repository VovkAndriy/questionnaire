import { Component, Input } from '@angular/core';
import { Question } from '../../../shared/interfaces/question';
import { QuestionService } from '../../../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() public question?: Question;

  constructor(private questionService: QuestionService) {}

  public deleteQuestion(): void {
    if (this.question) {
      this.questionService.removeQuestion(this.question.id);
    }
  }
}

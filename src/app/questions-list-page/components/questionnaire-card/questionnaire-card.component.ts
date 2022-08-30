import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../../shared/interfaces/question';
import { QuestionService } from '../../../question.service';
import { QuestionTypesEnum } from '../../../shared/types/question-types.enum';

@Component({
  selector: 'app-questionnaire-card',
  templateUrl: './questionnaire-card.component.html',
  styleUrls: ['./questionnaire-card.component.scss'],
})
export class QuestionnaireCardComponent implements OnInit {
  @Input() public question?: Question;
  private selectedAnswer: string[] = [];
  public inputType: string = 'checkbox';
  public answer: string = '';
  public isReadOnly: boolean = false;

  constructor(private questionService: QuestionService) {}

  public ngOnInit(): void {
    this.changeInputType();
  }

  public selectOption(event: HTMLInputElement, option: string): void {
    if (this.inputType === 'radio') {
      this.selectedAnswer = [option];
    } else if (event.checked) {
      this.selectedAnswer.push(option);
    } else {
      this.selectedAnswer = this.selectedAnswer.filter(
        (optionItem: string) => optionItem !== option
      );
    }

    this.answer = this.selectedAnswer.join(',');
  }

  public inputAnswer(event: Event): void {
    this.answer = (event.target as HTMLInputElement)?.value;
  }

  public answerQuestion(): void {
    if (this.question) {
      this.question.isAnswered = true;
      this.question.answer = this.answer;
      this.questionService.updateQuestionsList(this.question);
    }
  }

  public removeFromAnsweredList(): void {
    if (this.question) {
      this.question.isAnswered = false;
      this.question.answer = this.answer = '';
      this.questionService.updateQuestionsList(this.question);
    }
  }

  private changeInputType(): void {
    if (this.question?.type !== QuestionTypesEnum.OPEN) {
      this.isReadOnly = true;
    }

    if (this.question?.type === QuestionTypesEnum.SINGLE) {
      this.inputType = 'radio';
    }
  }
}

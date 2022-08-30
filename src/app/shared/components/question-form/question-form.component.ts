import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { QuestionTypesEnum } from '../../types/question-types.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question } from '../../interfaces/question';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../../../question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
})
export class QuestionFormComponent implements OnInit {
  @ViewChild('chipsetInput') public chipsetInput!: ElementRef;
  @Input() public saveButtonType: string = 'Save';
  @Output() public onFormValue: EventEmitter<Question> =
    new EventEmitter<Question>();
  public questionTypesList = Object.values(QuestionTypesEnum);
  public currentType: string = QuestionTypesEnum.OPEN;
  public isSelectOpen: boolean = false;
  public isTypeQuestionOpen: boolean = false;
  public questionForm!: FormGroup;
  public options: string[] = [];
  public currentInputValue: string = '';
  public isEdited: boolean = false;
  private id: number = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) {}

  public ngOnInit(): void {
    this.checkIfOpenQuestion();
    this.buildForm();
  }

  public selectType(type: string): void {
    this.currentType = type;
    this.questionForm.get('type')?.setValue(this.currentType);
    this.checkIfOpenQuestion();
  }

  public inputOptions(value: string): void {
    this.currentInputValue = value;
  }

  public removeOption(option: string): void {
    this.options = this.options.filter(
      (optionItem: string) => optionItem !== option
    );
  }

  public addChipset(event: KeyboardEvent): void {
    const isAnswerOptionExist = this.options.includes(this.currentInputValue);

    if (isAnswerOptionExist) {
      return;
    }

    if (event.key === 'Enter' && !!this.currentInputValue) {
      this.options.push(this.currentInputValue);
      this.currentInputValue = this.chipsetInput.nativeElement.value = '';
    }
  }

  public submitForm(): void {
    if (!this.isTypeQuestionOpen) {
      this.options = [];
    }

    if (!this.isEdited) {
      this.id = new Date().getTime();
    }

    const questionData = {
      id: this.id,
      type: this.currentType,
      answerOptions: this.options,
      date: new Date().toUTCString(),
      isAnswered: false,
      isEdited: this.isEdited,
      ...this.questionForm.value,
    };

    this.questionService.updateQuestionsList(questionData);
    this.onFormValue.emit(questionData);
    this.router.navigateByUrl('/');
  }

  private buildForm(): void {
    this.questionForm = this.fb.group({
      question: [null, Validators.required],
      type: [null, [Validators.required]],
      rightAnswer: [null, Validators.required],
    });

    this.questionForm.get('type')?.setValue(this.currentType);

    if (this.saveButtonType.toLowerCase() === 'edit') {
      this.isEdited = true;
      this.editQuestion();
    }
  }

  private editQuestion(): void {
    const questionId = this.route.snapshot.paramMap.get('id');
    let question: Question | undefined;

    if (questionId) {
      question = this.questionService.findQuestionById(+questionId);
    }

    if (!question) {
      return;
    }

    this.questionForm.patchValue({
      type: question.type,
      question: question.question,
      rightAnswer: question.rightAnswer,
    });

    this.id = question.id;
    this.options = question.answerOptions;
    this.isTypeQuestionOpen = question.type !== QuestionTypesEnum.OPEN;
  }

  private checkIfOpenQuestion(): void {
    this.isTypeQuestionOpen = this.currentType !== QuestionTypesEnum.OPEN;
  }
}

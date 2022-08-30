import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { SortQuestionsPipe } from './pipes/sort-questions.pipe';

@NgModule({
  declarations: [QuestionFormComponent, NavMenuComponent, SortQuestionsPipe],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [QuestionFormComponent, NavMenuComponent, SortQuestionsPipe],
})
export class SharedModule {}

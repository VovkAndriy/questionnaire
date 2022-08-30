import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { QuestionComponent } from './components/question/question.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: QuestionsListComponent,
  },
];

@NgModule({
  declarations: [QuestionsListComponent, QuestionComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [QuestionsListComponent],
})
export class QuestionManagementPageModule {}

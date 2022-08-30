import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CreateQuestionComponent,
  },
];

@NgModule({
  declarations: [CreateQuestionComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class CreateQuestionPageModule {}

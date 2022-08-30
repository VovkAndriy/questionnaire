import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditQuestionComponent } from './components/edit-question/edit-question.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: EditQuestionComponent,
  },
];

@NgModule({
  declarations: [EditQuestionComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class EditQuestionPageModule {}

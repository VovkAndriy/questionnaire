import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./question-management-page/question-management-page.module').then(
        (m) => m.QuestionManagementPageModule
      ),
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('./edit-question-page/edit-question-page.module').then(
        (m) => m.EditQuestionPageModule
      ),
  },
  {
    path: 'create-question',
    loadChildren: () =>
      import('./create-question-page/create-question-page.module').then(
        (m) => m.CreateQuestionPageModule
      ),
  },
  {
    path: 'questions-list',
    loadChildren: () =>
      import('./questions-list-page/questions-list-page.module').then(
        (m) => m.QuestionsListPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

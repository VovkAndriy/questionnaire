import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsListsPageComponent } from './components/questions-lists-page/questions-lists-page.component';
import { SharedModule } from '../shared/shared.module';
import { AnsweredQuestionsListComponent } from './components/answered-questions-list/answered-questions-list.component';
import { QuestionnaireCardComponent } from './components/questionnaire-card/questionnaire-card.component';
import { UnansweredQuestionListComponent } from './components/unanswered-question-list/unanswered-question-list.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionsListsPageComponent,
  },
];

@NgModule({
  declarations: [
    QuestionsListsPageComponent,
    AnsweredQuestionsListComponent,
    QuestionnaireCardComponent,
    UnansweredQuestionListComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class QuestionsListPageModule {}

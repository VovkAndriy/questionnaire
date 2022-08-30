import { Pipe, PipeTransform } from '@angular/core';
import { Question } from '../interfaces/question';

@Pipe({
  name: 'sortQuestions',
})
export class SortQuestionsPipe implements PipeTransform {
  public transform(array: Question[]): Question[] {
    return array.sort((a: Question, b: Question) => (a.id < b.id ? 1 : -1));
  }
}

import { QuestionBase } from './question-base';

export class BooleanQuestion extends QuestionBase<boolean> {
  controlType = 'checkbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
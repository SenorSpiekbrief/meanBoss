import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DropdownQuestion } from '../models/dropdown-question';
import { TextboxQuestion }  from '../models/textbox-question';
import { DateQuestion }  from '../models/date-question';
import { BooleanQuestion }  from '../models/boolean-question';

import { of } from 'rxjs';
import * as _ from 'lodash';

import { QuestionBase } from '../models/question-base';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<string>[] ) {
    let group: any = {};

    _.each(questions, question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  getDummyData() {
    let dummyData : QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return of(dummyData);
  }

  getFormData() {
    let result = [];

    result = [
      new TextboxQuestion({
        key: 'name',
        label: 'name',
        value: 'name',
        required: true,
        order: 1
      }),
      new BooleanQuestion({
        key: 'below18',
        label: 'below 18',
        value: false,
        type: 'checkbox',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'position',
        label: 'position',
        value: 'position',
        required: true,
        order: 3
      }),
      new DateQuestion({
        key: 'startdate',
        label: 'startdate',
        value: '',
        type:'date',
        required: true,
        order: 4
      }),
      
      new TextboxQuestion({
        key: 'employeeNumber',
        label: 'employee number',
        value: '',
        required: true,
        order: 5
      }),
      new DropdownQuestion({
        key: 'department',
        label: 'department',
        options: [
          {key: 'moon',  value: 'The MOoooooon!!! division'},
          {key: 'good',   value: 'The Awesome division'},
          {key: 'solid',  value: 'Solids Department'},
          {key: 'unhazed', value: 'Unhazed'}
        ],
        order: 6
      }),
      new DropdownQuestion({
        key: 'location',
        label: 'location',
        options: [
          {key: 'moon',  value: 'The MOoooooon!!!'},
          {key: 'nantucket',  value: 'Nantucket'},
          {key: 'kohona',  value: 'Kohona'},
          {key: 'cyberspace',   value: 'Cyberspace'},
          {key: 'unknown', value: 'Unknown'}
        ],
        order: 7
      }),
      
      new DateQuestion({
        key: 'enddate',
        label: 'enddate',
        value: '',
        type:'date',
        required: false,
        order: 8
      }),
    ];
    
 
    return of(result);
  }

}
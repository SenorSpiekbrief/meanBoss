import { Component, OnInit } from '@angular/core';
import { QuestionControlService } from '../../shared/services/question.service';

import { QuestionBase }    from '../../shared/models/question-base';
import { Observable }      from 'rxjs';

@Component({
  selector: 'app-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.scss']
})
export class DesignationsComponent implements OnInit {

  constructor(private questionService: QuestionControlService) { }

  questions$: Observable<QuestionBase<any>[]>;

  ngOnInit() {
    this.questions$ = this.questionService.getFormData();
    console.log(this.questionService.getFormData())
  }
}

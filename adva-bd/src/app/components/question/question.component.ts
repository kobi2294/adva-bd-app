import { Component, input } from '@angular/core';
import { StepTaskQuestion } from '../../models/step-task';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  readonly step = input.required<StepTaskQuestion>();

}

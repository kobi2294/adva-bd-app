import { Component, input } from '@angular/core';
import { StepTaskBless } from '../../models/step-task';

@Component({
  selector: 'app-bless',
  imports: [],
  templateUrl: './bless.component.html',
  styleUrl: './bless.component.scss'
})
export class BlessComponent {
  readonly step = input.required<StepTaskBless>();

}

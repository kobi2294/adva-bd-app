import { Component, input } from '@angular/core';
import { StepTaskGift } from '../../models/step-task';

@Component({
  selector: 'app-gift',
  imports: [],
  templateUrl: './gift.component.html',
  styleUrl: './gift.component.scss'
})
export class GiftComponent {
  readonly step = input.required<StepTaskGift>();

}

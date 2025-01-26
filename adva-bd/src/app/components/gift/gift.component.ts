import { Component, inject, input } from '@angular/core';
import { StepTaskGift } from '../../models/step-task';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'app-gift',
  imports: [],
  templateUrl: './gift.component.html',
  styleUrl: './gift.component.scss'
})
export class GiftComponent {
  readonly step = input.required<StepTaskGift>();
  readonly store = inject(AppStore);

}

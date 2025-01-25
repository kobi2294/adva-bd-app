import { Component, inject, input } from '@angular/core';
import { StepTaskImage } from '../../models/step-task';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'app-image',
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  readonly step = input.required<StepTaskImage>();
  readonly store = inject(AppStore);
  
}

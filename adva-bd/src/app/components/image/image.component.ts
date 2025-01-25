import { Component, input } from '@angular/core';
import { StepTaskImage } from '../../models/step-task';

@Component({
  selector: 'app-image',
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  readonly step = input.required<StepTaskImage>();
  
}

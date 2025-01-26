import { Component, input } from '@angular/core';
import { StepTaskBless } from '../../models/step-task';
import { KobiComponent } from '../../blesses/kobi/kobi.component';
import { EladComponent } from '../../blesses/elad/elad.component';
import { RonniComponent } from '../../blesses/ronni/ronni.component';

@Component({
  selector: 'app-bless',
  imports: [KobiComponent, EladComponent, RonniComponent],
  templateUrl: './bless.component.html',
  styleUrl: './bless.component.scss'
})
export class BlessComponent {
  readonly step = input.required<StepTaskBless>();

}

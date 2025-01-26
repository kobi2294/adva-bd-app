import { Component, inject } from '@angular/core';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'app-elad',
  imports: [],
  templateUrl: './elad.component.html',
  styleUrl: './elad.component.scss'
})
export class EladComponent {
  readonly store = inject(AppStore);

}

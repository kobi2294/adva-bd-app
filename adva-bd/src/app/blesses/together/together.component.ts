import { Component, inject } from '@angular/core';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'app-together',
  imports: [],
  templateUrl: './together.component.html',
  styleUrl: './together.component.scss'
})
export class TogetherComponent {
  readonly store = inject(AppStore);

}

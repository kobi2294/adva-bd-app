import { Component, inject } from '@angular/core';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'app-ronni',
  imports: [],
  templateUrl: './ronni.component.html',
  styleUrl: './ronni.component.scss'
})
export class RonniComponent {
  readonly store = inject(AppStore);

}

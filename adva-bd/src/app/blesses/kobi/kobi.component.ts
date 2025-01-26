import { Component, inject } from '@angular/core';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'app-kobi',
  imports: [],
  templateUrl: './kobi.component.html',
  styleUrl: './kobi.component.scss'
})
export class KobiComponent {
  readonly store = inject(AppStore);

}

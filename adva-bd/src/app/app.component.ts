import { Component, computed, inject } from '@angular/core';
import { AppStore } from './store/app.store';
import { ImageComponent } from './components/image/image.component';
import { QuestionComponent } from './components/question/question.component';
import { GiftComponent } from './components/gift/gift.component';
import { BlessComponent } from './components/bless/bless.component';

@Component({
  selector: 'app-root',
  imports: [ImageComponent, QuestionComponent, GiftComponent, BlessComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  providers: [AppStore], 
  host: {
    '[style.--base-color]': 'theme()',
    '[class.theme]': 'true'
  }
})
export class AppComponent {
  readonly store = inject(AppStore);
  readonly theme = computed(() => this.store.currentStep().theme);
}

import {
  Component,
  effect,
  inject,
  input,
  signal,
  untracked,
} from '@angular/core';
import { StepTaskQuestion } from '../../models/step-task';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  readonly store = inject(AppStore);
  readonly step = input.required<StepTaskQuestion>();
  readonly status = signal('');
  readonly answerStatus = signal(-1);

  setAnswer(value: number) {
    if (this.status() !== '') {return;}
    if (this.step().correctIndex === value) {
      this.onCorrect();
    } else {
      this.onIncorrect(value);
    }
  }

  async onCorrect() {
    this.status.set('correct');
    this.answerStatus.set(this.step().correctIndex);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    this.store.nextStep();
  }

  async onIncorrect(value: number) {
    this.status.set('incorrect');
    this.answerStatus.set(value);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (this.status() === 'incorrect') {
      this.status.set('');
      this.answerStatus.set(-1);
    }
  }

  constructor() {
    effect(() => {
      const s = this.step();
      untracked(() => {
        this.status.set('');
        this.answerStatus.set(-1);
      });
    });
  }
}

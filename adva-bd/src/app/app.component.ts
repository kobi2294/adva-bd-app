import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EladComponent } from "./blesses/elad/elad.component";
import { RonniComponent } from "./blesses/ronni/ronni.component";
import { KobiComponent } from './blesses/kobi/kobi.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EladComponent, RonniComponent, KobiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'adva-bd';
}

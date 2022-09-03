import { Component, VERSION } from '@angular/core';
import { Theme } from './core/utilities/theam';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  color() {
    const color = {};
    Theme.setThemeColor(color);
  }
}

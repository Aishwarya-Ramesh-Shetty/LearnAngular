import { Component } from '@angular/core';
import { ToggleStatusComponent } from './toggle-status/toggle-status';

@Component({
  selector: 'app-root',
  imports: [ToggleStatusComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'First Angular App';
  developerName = 'Ash';
  status = 'Learning Angular';
}

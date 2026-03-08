import { Component } from '@angular/core';
// import { ToggleStatusComponent } from './toggle-status/toggle-status';
import { CharacterCountDisplayComponent } from './character-count-display/character-count-display';

@Component({
  selector: 'app-root',
  imports: [ CharacterCountDisplayComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'First Angular App';
  developerName = 'Ash';
  status = 'Learning Angular';
}

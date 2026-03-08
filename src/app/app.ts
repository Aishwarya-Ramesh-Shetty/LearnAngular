import { Component } from '@angular/core';
import { PersonalBudgetTrackerComponent } from './personal-budget-tracker/personal-budget-tracker';
// import { AddSkillComponent } from './add-skill/add-skill';
// import { ToggleStatusComponent } from './toggle-status/toggle-status';
// import { CharacterCountDisplayComponent } from './character-count-display/character-count-display';

@Component({
  selector: 'app-root',
  imports: [PersonalBudgetTrackerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'First Angular App';
  developerName = 'Ash';
  status = 'Learning Angular';
}

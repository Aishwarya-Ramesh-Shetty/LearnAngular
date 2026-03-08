import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-count-display',
  imports: [FormsModule],
  templateUrl: './character-count-display.html',
  styleUrl: './character-count-display.css',
})
export class CharacterCountDisplayComponent {
  title : string = 'Character Count Display';
  message : string = '';
  maxChars : number = 100;
  
  clearText(){
    this.message = '';
  }
}

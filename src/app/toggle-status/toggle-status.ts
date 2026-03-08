import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-status',
  imports: [],
  templateUrl: './toggle-status.html',
  styleUrl: './toggle-status.css',
})
export class ToggleStatusComponent {
  title = 'Toggle Emoji Status';
  isOnline = true;
  happyEmoji = 'https://toppng.com/uploads/preview/smile-emoji-transparent-11549402542zsxvy0mge3.png'
  sadEmoji = 'https://p1.hiclipart.com/preview/209/164/973/emoji-faces-sad-emoji.jpg'
  toggleStatus() {
    this.isOnline = !this.isOnline;
  }
}

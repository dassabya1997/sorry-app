import { Component } from '@angular/core';

@Component({
  selector: 'app-sorry',
  templateUrl: './sorry.component.html',
  styleUrls: ['./sorry.component.css']
})
export class SorryComponent {
  message: string | null = null;

  showMessage(option: string) {
    if (option === 'forgive') {
      this.message = 'Thank you, my baccha.';
    } else if (option === 'maybe') {
      this.message = 'I will wait, baby.';
    } else if (option === 'reject') {
      this.message = 'This is not a valid option. Please try the other two.';
    }
  }
}

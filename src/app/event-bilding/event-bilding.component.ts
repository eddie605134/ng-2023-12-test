import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-event-bilding',
  standalone: true,
  imports: [
    ButtonComponent,
  ],
  templateUrl: './event-bilding.component.html',
  styleUrl: './event-bilding.component.scss'
})
export class EventBildingComponent {
  relearned = false;

  startRelearn() {
    this.relearned = true;
  }
}

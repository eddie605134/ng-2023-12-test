import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonClass: string = 'my-custom-class'
  @Output() buttonClick = new EventEmitter<any>();

  onClick() {
    this.buttonClick.emit();
  }
}

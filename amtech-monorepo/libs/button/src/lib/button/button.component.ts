import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type Variant = 'primary' | 'secondary' | 'tertiary';
type Theme = 'blue'|'violet';
@Component({
  selector: 'amt-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text = '';
  @Input() variant: Variant = 'primary';
  @Input() disabled = false;
  @Input() theme: Theme = 'blue';

  getClasses(): string {
    return `${this.variant} ${this.theme}`;
  }
}

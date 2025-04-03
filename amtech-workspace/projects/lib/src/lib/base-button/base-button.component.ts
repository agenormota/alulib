import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'amt-base-button',
  standalone: true,
  imports: [],
  template: `
   <button type=" button" class="btnCancel btn-two" (click)="cancelButtonPressed.emit($event)">
    <span class="cancelSpan">Cancel</span>
   </button>
  `,
  styleUrl: './base-button.component.css'
})
export class BaseButtonComponent {
  @Output() cancelButtonPressed: EventEmitter<unknown> = new EventEmitter<unknown>();
  public buttonMargin = '';
}

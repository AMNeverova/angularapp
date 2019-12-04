import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Output() private textEmitter = new EventEmitter();

  sendText(text: string) {
    this.textEmitter.emit(text)
  }

  constructor() { }
}

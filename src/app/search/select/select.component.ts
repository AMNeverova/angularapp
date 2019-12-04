import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() private name: string;
  @Input() private options: string[];
  @Output() private valueEmitter = new EventEmitter();
  selectValue(event) {
    this.valueEmitter.emit(event);
  }
  constructor() { }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() public name: string;
  @Input() public options: string[];
  @Output() public valueEmitter = new EventEmitter();
  selectValue(event) {
    this.valueEmitter.emit(event);
  }
  constructor() { }
}

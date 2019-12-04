import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-search',
  templateUrl: './button-search.component.html',
  styleUrls: ['./button-search.component.scss']
})
export class ButtonSearchComponent {
  @Output() clickEmitter = new EventEmitter();

  handleClick() {
    this.clickEmitter.emit();
  }

  constructor() { }
}

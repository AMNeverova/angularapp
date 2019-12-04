import { Component } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-view-filter',
  templateUrl: './view-filter.component.html',
  styleUrls: ['./view-filter.component.scss']
})
export class ViewFilterComponent {
  public rowsColor: string = 'rows-black';
  public gridColor: string = 'grid-grey';

  toggleItemColor(clickedItem: string) {
    if (clickedItem === 'rows') {
      this.rowsColor = 'rows-black';
      this.gridColor = 'grid-grey';
    } else {
      this.gridColor = 'grid-black';
      this.rowsColor = 'rows-grey';
    }

  }

  handleClick(evt) {
    let type = evt.target.classList[0];
    this.request.displayType = type;
    this.toggleItemColor(type);
  }

  constructor(private request: RequestService) { }
}

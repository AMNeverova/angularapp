import { Component, Input } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-results-lines',
  templateUrl: './rows-list.component.html',
  styleUrls: ['./rows-list.component.scss']
})
export class RowsListComponent {

  public linesColor: string = 'lines-black';
  public squaresColor: string = 'squares-grey';
  @Input() arrayToRender: object[];
  @Input() isChecked: boolean;

  constructor(public request: RequestService) {
   }
}

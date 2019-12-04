import { Component, Input } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent {

  public squaresColor : string = 'squares-black';
  public linesColor : string = 'lines-grey';
  @Input() arrayToRender: object[];

  constructor(private request: RequestService) { }
}

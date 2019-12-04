import { Component } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-results-block',
  templateUrl: './results-block.component.html',
  styleUrls: ['./results-block.component.scss']
})
export class ResultsBlockComponent {

  constructor(private request: RequestService) { }
}

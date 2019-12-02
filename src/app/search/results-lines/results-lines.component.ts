import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-results-lines',
  templateUrl: './results-lines.component.html',
  styleUrls: ['./results-lines.component.scss']
})
export class ResultLinesComponent implements OnInit {

  constructor(private request: RequestService) {
   }

  ngOnInit() {
  }

}

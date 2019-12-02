import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-results-block',
  templateUrl: './results-block.component.html',
  styleUrls: ['./results-block.component.scss']
})
export class ResultsBlockComponent implements OnInit {

  constructor(private request: RequestService) { }

  ngOnInit() {
  }

}

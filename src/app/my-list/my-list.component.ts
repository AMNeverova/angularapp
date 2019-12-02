import { Component } from '@angular/core';
import { RequestService } from '../search/request.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent {
  constructor(private request: RequestService) { }
}

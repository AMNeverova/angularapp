import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-search-block',
  templateUrl: './search-block.component.html',
  styleUrls: ['./search-block.component.scss'],
})
export class SearchBlockComponent implements OnInit {
  private selects: Array<Object> = [{
    name: 'Type',
    options: ['repositories', 'commits', 'code', 'issues', 'users', 'topics', 'labels']
  }, {
    name: 'Language',
    options: ['Javascript', 'css', 'html', 'php', 'ruby', 'c++', 'python', 'c#', 'java', 'go', 'haskel']
  }]

  type: string = '';
  language: string = '';
  text: string = '';

  addOption(value: string[]) {
    let name = value[0].toLowerCase();
    this[`${name}`] = value[1];
  }

  addText(text: string) {
    this.text = text;
  }

  sendRequest() {
    this.request.getRepos(this.type, this.language, this.text)
  }
  constructor( private request: RequestService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-filter',
  templateUrl: './view-filter.component.html',
  styleUrls: ['./view-filter.component.scss']
})
export class ViewFilterComponent implements OnInit {

  handleSquaresClick() {
    this.router.navigate(['search/grid-list'])
  }

  handleLinesClick() {
    this.router.navigate(['search/rows-list'])
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}

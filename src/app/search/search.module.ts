import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchAndResultsComponent } from './search-and-results/search-and-results.component';
import { SearchBlockComponent } from './search-block/search-block.component';
import { NoresultsComponent } from './noresults/noresults.component';
import { SelectComponent } from './select/select.component';
import { InputTextComponent } from './input-text/input-text.component';
import { ButtonSearchComponent } from './button-search/button-search.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './request.service';
import { RowsListComponent } from './rows-list/rows-list.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ViewFilterComponent } from './view-filter/view-filter.component';
import { RouterModule } from '@angular/router';
import { ResultsBlockComponent } from './results-block/results-block.component';
import { ShowViewFilterDirective } from './show-view-filter.directive';

@NgModule({
  declarations: [
    SearchAndResultsComponent, 
    SearchBlockComponent, 
    NoresultsComponent, 
    SelectComponent, 
    InputTextComponent, 
    ButtonSearchComponent, 
    RowsListComponent, GridListComponent, 
    ViewFilterComponent, ResultsBlockComponent, 
    ShowViewFilterDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  RouterModule  ],
  exports: [SearchAndResultsComponent, ViewFilterComponent, RowsListComponent, GridListComponent],
  providers: [ RequestService ]
})
export class SearchModule { }

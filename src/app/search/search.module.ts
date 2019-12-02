import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchAndResultsComponent } from './search-and-results/search-and-results.component';
import { ResultsBlockComponent } from './results-block/results-block.component';
import { SearchBlockComponent } from './search-block/search-block.component';
import { NoresultsComponent } from './noresults/noresults.component';
import { SelectComponent } from './select/select.component';
import { InputTextComponent } from './input-text/input-text.component';
import { ButtonSearchComponent } from './button-search/button-search.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './request.service';
import { ResultLinesComponent } from './results-lines/results-lines.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ViewFilterComponent } from './view-filter/view-filter.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchAndResultsComponent, 
    SearchBlockComponent, 
    ResultsBlockComponent, 
    NoresultsComponent, 
    SelectComponent, 
    InputTextComponent, 
    ButtonSearchComponent, 
    ResultLinesComponent, GridListComponent, ViewFilterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  RouterModule  ],
  exports: [SearchAndResultsComponent, ViewFilterComponent],
  providers: [ RequestService ]
})
export class SearchModule { }

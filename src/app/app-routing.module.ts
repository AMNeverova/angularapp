import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchAndResultsComponent } from './search/search-and-results/search-and-results.component';
import { MyListComponent } from './my-list/my-list.component';
import { ResultsBlockComponent } from './search/results-block/results-block.component';
import { NoresultsComponent } from './search/noresults/noresults.component';
import { ResultLinesComponent } from './search/results-lines/results-lines.component';
import { GridListComponent } from './search/grid-list/grid-list.component';


const routes: Routes = [
  { path: 'search', component: SearchAndResultsComponent, children: [
    {
      path: 'noresults', component: NoresultsComponent
    },
    {
      path: 'rows-list', component: ResultLinesComponent
    },
    {
      path: 'grid-list', component: GridListComponent
    }
  ] },
  { path: 'my-list', component: MyListComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

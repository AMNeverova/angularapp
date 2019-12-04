import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchAndResultsComponent } from './search/search-and-results/search-and-results.component';
import { MyListComponent } from './my-list/my-list.component';

const routes: Routes = [
  { path: 'search', component: SearchAndResultsComponent },
  { path: 'my-list', component: MyListComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

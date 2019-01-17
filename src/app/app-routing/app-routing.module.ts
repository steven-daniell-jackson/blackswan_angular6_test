import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoDetailsComponent } from '../views/templates/pages/repo-details/repo-details.component';
import { SearchPageComponent } from '../views/templates/pages/search-page/search-page.component';
import { RepoIssuesComponent } from '../views/templates/pages/repo-details/repo-issues/repo-issues.component';
import { PiechartPageComponent } from '../views/templates/pages/repo-details/piechart-page/piechart-page.component';

const appRoutes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'repo-details/:id', component: RepoDetailsComponent },
  { path: 'repo-details/:id/issues', component: RepoIssuesComponent },
  { path: 'repo-details/:id/piechart', component: PiechartPageComponent },
  { path: '**', component: SearchPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

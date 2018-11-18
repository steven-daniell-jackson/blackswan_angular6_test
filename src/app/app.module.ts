import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { SearchPageComponent } from './views/search-page/search-page.component';
import { PiechartPageComponent } from './views/repo-details/piechart-page/piechart-page.component';
import { GithubService } from './service/github.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SearchItemComponent } from './views/search-page/search-item/search-item.component';
import { RepoDetailsComponent } from './views/repo-details/repo-details.component';
import { RepoIssuesComponent } from './views/repo-details/repo-issues/repo-issues.component';
import { LoaderComponent } from './elements/loader/loader.component';
import { BackButtonComponent } from './elements/back-button/back-button.component';
import { ButtonComponent } from './elements/button/button.component';
import { LinkComponent } from './elements/link/link.component';
import { ExternalLinkComponent } from './elements/external-link/external-link.component';
import { ErrorMessageComponent } from './elements/error-message/error-message.component';
import { HeaderComponent } from './elements/header/header.component';
import { FooterComponent } from './elements/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchPageComponent,
    PiechartPageComponent,
    SearchItemComponent,
    RepoDetailsComponent,
    RepoIssuesComponent,
    LoaderComponent,
    BackButtonComponent,
    ButtonComponent,
    LinkComponent,
    ExternalLinkComponent,
    ErrorMessageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }

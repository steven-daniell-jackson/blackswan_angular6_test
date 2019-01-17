import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

// Service Components
import { GithubService } from './service/github.service';

// HTML Parts and Directives
import { LoaderComponent } from './views/templates/parts/loader/loader.component';
import { BackButtonComponent } from './views/templates/parts/back-button/back-button.component';
import { ButtonComponent } from './views/templates/parts/button/button.component';
import { LinkComponent } from './views/templates/parts/link/link.component';
import { ExternalLinkComponent } from './views/templates/parts/external-link/external-link.component';
import { ErrorMessageComponent } from './views/templates/parts/error-message/error-message.component';
import { HeaderComponent } from './views/templates/parts/header/header.component';
import { FooterComponent } from './views/templates/parts/footer/footer.component';
import { NavbarComponent } from './views/templates/parts/navbar/navbar.component';

// Page Templates
import { SearchPageComponent } from './views/templates/pages/search-page/search-page.component';
import { PiechartPageComponent } from './views/templates/pages/repo-details/piechart-page/piechart-page.component';
import { SearchItemComponent } from './views/templates/pages/search-page/search-item/search-item.component';
import { RepoDetailsComponent } from './views/templates/pages/repo-details/repo-details.component';
import { RepoIssuesComponent } from './views/templates/pages/repo-details/repo-issues/repo-issues.component';

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

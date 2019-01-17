import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpHandler} from '@angular/common/http';

import { GithubService } from '../../../../service/github.service';
import { RepoDetailsComponent } from './repo-details.component';
import { ErrorMessageComponent } from '../../parts/error-message/error-message.component';
import { LoaderComponent } from '../../parts/loader/loader.component';
import { LinkComponent } from '../../parts/link/link.component';
import { ExternalLinkComponent } from '../../parts/external-link/external-link.component';
import { BackButtonComponent } from '../../parts/back-button/back-button.component';

describe('RepoDetailsComponent', () => {
  let component: RepoDetailsComponent;
  let fixture: ComponentFixture<RepoDetailsComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [ RepoDetailsComponent,
        ErrorMessageComponent,
        LoaderComponent,
        LinkComponent,
        ExternalLinkComponent,
        BackButtonComponent ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}, GithubService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpHandler} from '@angular/common/http';
import { GithubService } from '../../../../../service/github.service';

import { RepoIssuesComponent } from './repo-issues.component';
import { ErrorMessageComponent } from '../../../parts/error-message/error-message.component';
import { LoaderComponent } from '../../../parts/loader/loader.component';
import { BackButtonComponent } from '../../../parts/back-button/back-button.component';
import { ButtonComponent } from '../../../parts/button/button.component';

describe('RepoIssuesComponent', () => {
  let component: RepoIssuesComponent;
  let fixture: ComponentFixture<RepoIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [ RepoIssuesComponent, ErrorMessageComponent, LoaderComponent, BackButtonComponent, ButtonComponent ],
      providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}, GithubService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

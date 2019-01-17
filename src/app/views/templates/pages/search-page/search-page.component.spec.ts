import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { SearchPageComponent } from './search-page.component';
import { SearchItemComponent } from '../search-page/search-item/search-item.component';
import { ErrorMessageComponent } from '../../parts/error-message/error-message.component';
import { GithubService } from 'src/app/service/github.service';
import { HttpHandler, HttpClient} from '@angular/common/http';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [ SearchPageComponent, SearchItemComponent, ErrorMessageComponent ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}, GithubService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

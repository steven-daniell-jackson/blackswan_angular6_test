import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartPageComponent } from './piechart-page.component';
import { LoaderComponent } from '../../../parts/loader/loader.component';
import { BackButtonComponent } from '../../..//parts/back-button/back-button.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler} from '@angular/common/http';

// Service Components
import { GithubService } from '../../../../../service/github.service';

describe('PiechartPageComponent', () => {
  let component: PiechartPageComponent;
  let fixture: ComponentFixture<PiechartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [GithubService, HttpClient, HttpHandler],
      declarations: [ PiechartPageComponent, LoaderComponent, BackButtonComponent ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiechartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

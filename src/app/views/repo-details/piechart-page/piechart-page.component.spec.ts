import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartPageComponent } from './piechart-page.component';

describe('PiechartPageComponent', () => {
  let component: PiechartPageComponent;
  let fixture: ComponentFixture<PiechartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiechartPageComponent ]
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

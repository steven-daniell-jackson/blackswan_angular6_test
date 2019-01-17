import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-link',
  template: `
  <a [routerLink]="routerLink" class="btn btn-lg {{className}}"
  [queryParams]="queryParams" role="button" aria-pressed="true">
  {{linkText}} </a>`,
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  @Input() className: String;
  @Input() routerLink: String;
  @Input() queryParams: String;
  @Input() linkText: String;

  constructor() { }

}

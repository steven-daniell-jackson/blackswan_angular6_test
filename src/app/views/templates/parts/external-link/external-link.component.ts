import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-external-link',
  template: `
  <a href="{{href}}" class="{{className}}" target="_blank"
    role="button" aria-pressed="true">
  {{linkText}} </a>`,
  styleUrls: ['./external-link.component.css']
})
export class ExternalLinkComponent {

  @Input() href: String;
  @Input() className: String;
  @Input() linkText: String;


  constructor() { }


}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-external-link',
  template: `
  <a href="{{href}}" class="{{className}}" target="_blank"
    role="button" aria-pressed="true">
  {{linkText}} </a>`,
  styleUrls: ['./external-link.component.css']
})
export class ExternalLinkComponent implements OnInit {

  @Input() href: String;
  @Input() className: String;
  @Input() linkText: String;


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: `<div class="error-message text-center {{className}}">{{errorMessage}}</div>`,
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent{

  @Input() errorMessage: string;
  @Input() className: string;
  constructor() { }
}

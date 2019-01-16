import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: `
  <div class="container">
  <div class="row">
    <div class="input-group col-md-6 offset-md-3">
      <div class="alert alert-danger  text-center" role="alert">
        <h3>Server Error!</h3>
          <div class="error-message {{className}}">Error:
            <p>{{errorMessage}}</p>
          </div>
        </div>
      </div>
  </div>
`,
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {

  @Input() errorMessage: string;
  @Input() className: string;
  constructor() { }
}

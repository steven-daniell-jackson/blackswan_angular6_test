import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-button',
  template: `<button class="btn {{className}}">{{buttonText}}</button>`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() className: String;
  @Input() buttonText: String;


  constructor() { }

  ngOnInit() {
  }

}

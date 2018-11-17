import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `<div class='loader text-center'>
  <img src='https://www.tradefinex.org/assets/images/icon/ajax-loader.gif' alt="">
  </div>`,
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

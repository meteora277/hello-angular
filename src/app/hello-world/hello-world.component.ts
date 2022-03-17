import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
    <p>hello-world works! {{ count }}</p>
    <button type="button" (click)="onClickMe()">uwu</button>
  `,
  styles: [],
})
export class HelloWorldComponent implements OnInit {
  count: number = 0;
  constructor() {}

  onClickMe() {
    this.count += 1;
  }

  ngOnInit(): void {}
}

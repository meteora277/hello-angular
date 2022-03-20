import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
    <p>hello-world works! {{ count }}</p>
    <button type="button" (click)="onClickMe()">uwu</button>
    <button (click)="onClickReset()">Reset</button>
  `,
  styles: [],
})
export class HelloWorldComponent implements OnInit {
  count: number = 0;
  constructor() {}

  onClickMe() {
    this.count += 1;
  }

  onClickReset() {
    this.count = 0;
  }

  ngOnInit(): void {}
}

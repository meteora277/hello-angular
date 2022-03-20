import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
    <p>hello {{ name }}</p>
    <button type="button" (click)="onClickMe()">uwu</button>
    <button (click)="onClickReset()">Reset</button>
    <button (click)="addNameLocal('uwu')">Add uwu to local storage</button>
  `,
  styles: [],
})
export class HelloWorldComponent implements OnInit {
  count: number = 0;
  name: string = localStorage.getItem('name') || '';

  constructor() {}

  onClickMe() {
    this.count += 1;
  }

  onClickReset() {
    this.count = 0;
  }
  onChangeName(name: string) {
    this.name = name;
  }

  addNameLocal(name: string) {
    localStorage.setItem('name', name);
    this.name = name;
  }

  ngOnInit(): void {}
}

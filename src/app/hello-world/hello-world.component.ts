import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
    <p>hello {{ nome }}</p>
    <button type="button" (click)="onClick()">uwu</button>
    <button (click)="addNameLocal('uwu')">Add uwu to local storage</button>
    <input
      type="text"
      name="name"
      [(ngModel)]="nome"
      placeholder="uwu"
      (keyup)="inputChange($event)"
    />
  `,
  styles: [],
})
export class HelloWorldComponent implements OnInit {
  nome: string = localStorage.getItem('name') || '';

  constructor() {}

  onClick() {
    console.log(this.nome);
  }

  onChangeName(name: string) {
    this.nome = name;
  }
  inputChange(event: any) {
    localStorage.setItem('name', event.target.value);
  }

  addNameLocal(name: string) {
    localStorage.setItem('name', name);
    this.nome = name;
  }

  ngOnInit(): void {}
}

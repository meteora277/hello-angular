import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
    <p>hello {{ nome }}</p>
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
  wallet: number = Number(localStorage.getItem('wallet')) || 0;
  lastChecked: number = Number(localStorage.getItem('lastChecked'));

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

  ngOnInit(): void {
    if (!localStorage.getItem('lastChecked')) {
      localStorage.setItem('lastChecked', JSON.stringify(Date.now()));
      localStorage.setItem('wallet', '10');
    }
    const daysElapsed = (Date.now() - this.lastChecked) / (1000 * 60 * 60 * 24);
    // add lastCheck conditional because if 0 Date.now() would be a large value and wallet would get wrong value
    if (daysElapsed >= 1 && this.lastChecked !== 0) {
      localStorage.setItem('wallet', `${(this.wallet += 10 * daysElapsed)}`);
      localStorage.setItem('lastChecked', JSON.stringify(Date.now()));
    }
  }
}

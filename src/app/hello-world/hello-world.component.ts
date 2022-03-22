import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
    <div>
      <p>
        Hello {{ name
        }}<span [style]="'font-size: 10px'" (click)="show()"> (edit)</span>
      </p>
      <input
        *ngIf="shown"
        type="text"
        name="name"
        [(ngModel)]="name"
        placeholder="uwu"
        (keyup)="inputChange($event)"
      />

      <p>You have \${{ wallet }} in your wallet</p>
    </div>
  `,
  styles: [
    ' div {display: flex; justify-content: center; flex-direction: column; text-align: center;}',
  ],
})
export class HelloWorldComponent implements OnInit {
  name: string = localStorage.getItem('name') || '';
  wallet: number = Number(localStorage.getItem('wallet')) || 10;
  lastChecked: number = Number(localStorage.getItem('lastChecked'));
  shown: boolean = false;
  constructor() {}

  show() {
    this.shown = !this.shown;
  }

  updateWallet() {
    this.wallet = Number(localStorage.getItem('wallet'));
  }

  inputChange(event: any) {
    localStorage.setItem('name', event.target.value);
  }
  ngOnInit(): void {
    if (!localStorage.getItem('name')) {
      localStorage.setItem('name', 'new user');
      this.name = 'new user';
    }
    if (!localStorage.getItem('lastChecked')) {
      localStorage.setItem('lastChecked', JSON.stringify(Date.now()));
      localStorage.setItem('wallet', '10');
    }
    const daysElapsed = Math.floor(
      (Date.now() - this.lastChecked) / (1000 * 60 * 60 * 24)
    );

    // add lastCheck conditional because if 0 Date.now() would be a large value and wallet would get wrong value
    if (daysElapsed >= 1 && this.lastChecked !== 0) {
      localStorage.setItem('wallet', `${(this.wallet += 10 * daysElapsed)}`);
      localStorage.setItem('lastChecked', JSON.stringify(Date.now()));
    }
  }
}

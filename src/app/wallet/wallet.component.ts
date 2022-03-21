import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  template: ` <div>\${{ wallet }}</div> `,
  styleUrls: ['./wallet.component.css'],
})
export class WalletComponent implements OnInit {
  constructor() {}
  wallet: number | undefined;
  ngOnInit(): void {
    this.wallet = Number(localStorage.getItem('wallet'));
  }
}

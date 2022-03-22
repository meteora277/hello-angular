import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit {
  constructor() {}

  makePurchase(purchase: number) {
    const wallet: number = Number(localStorage.getItem('wallet'));
    const updatedWallet: number = wallet - purchase;
    localStorage.setItem('wallet', `${updatedWallet}`);
  }

  ngOnInit(): void {}
}

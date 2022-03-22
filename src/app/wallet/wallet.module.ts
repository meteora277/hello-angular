import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { PurchaseComponent } from '../purchase/purchase.component';

@NgModule({
  declarations: [WalletComponent, PurchaseComponent],
  imports: [CommonModule],
  exports: [WalletComponent],
})
export class WalletModule {}

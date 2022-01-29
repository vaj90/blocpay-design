import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PayNowEtransferComponent } from './component/pay-now-etransfer/pay-now-etransfer.component';
import { PayNowEtransferInstructionsComponent } from './component/pay-now-etransfer-instructions/pay-now-etransfer-instructions.component';
import { PayNowEtransferInstructionsSentComponent } from './component/pay-now-etransfer-instructions-sent/pay-now-etransfer-instructions-sent.component';
import { PayNowEtransferSendRequestComponent } from './component/pay-now-etransfer-send-request/pay-now-etransfer-send-request.component';
import { PayNowEtransferSendRequestSentComponent } from './component/pay-now-etransfer-send-request-sent/pay-now-etransfer-send-request-sent.component';
import { PayNowSelectPaymentComponent } from './component/pay-now-select-payment/pay-now-select-payment.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations : [
    PayNowEtransferComponent,
    PayNowEtransferInstructionsComponent,
    PayNowEtransferInstructionsSentComponent,
    PayNowEtransferSendRequestComponent,
    PayNowEtransferSendRequestSentComponent,
    PayNowSelectPaymentComponent
  ],
  exports: [
    PayNowEtransferComponent
  ]
})
export class SharedModule { }

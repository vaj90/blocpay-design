import { Routes } from '@angular/router';
import { PayNowEtransferInstructionsSentComponent } from 'src/app/shared/component/pay-now-etransfer-instructions-sent/pay-now-etransfer-instructions-sent.component';
import { PayNowEtransferInstructionsComponent } from 'src/app/shared/component/pay-now-etransfer-instructions/pay-now-etransfer-instructions.component';
import { PayNowEtransferSendRequestSentComponent } from 'src/app/shared/component/pay-now-etransfer-send-request-sent/pay-now-etransfer-send-request-sent.component';
import { PayNowEtransferSendRequestComponent } from 'src/app/shared/component/pay-now-etransfer-send-request/pay-now-etransfer-send-request.component';
import { PayNowEtransferComponent } from 'src/app/shared/component/pay-now-etransfer/pay-now-etransfer.component';
import { PayNowSelectPaymentComponent } from 'src/app/shared/component/pay-now-select-payment/pay-now-select-payment.component';

export const DefaultLayoutRoutes: Routes = [
    { path : 'pay-now-etransfer' , component : PayNowEtransferComponent},
    { path : 'pay-now-etransfer-instruction' , component : PayNowEtransferInstructionsComponent},
    { path : 'pay-now-etransfer-instruction-sent' , component : PayNowEtransferInstructionsSentComponent},
    { path : 'pay-now-etransfer-send-request' , component : PayNowEtransferSendRequestComponent},
    { path : 'pay-now-etransfer-send-request-sent' , component : PayNowEtransferSendRequestSentComponent},
    { path : 'pay-now-select-payment' , component : PayNowSelectPaymentComponent},
];
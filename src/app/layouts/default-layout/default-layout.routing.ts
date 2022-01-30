import { Routes } from '@angular/router';
import { PayNowEtransferInstructionsSentComponent } from 'src/app/shared/component/pay-now-etransfer-instructions-sent/pay-now-etransfer-instructions-sent.component';
import { PayNowEtransferInstructionsComponent } from 'src/app/shared/component/pay-now-etransfer-instructions/pay-now-etransfer-instructions.component';
import { PayNowEtransferSendRequestSentComponent } from 'src/app/shared/component/pay-now-etransfer-send-request-sent/pay-now-etransfer-send-request-sent.component';
import { PayNowEtransferSendRequestComponent } from 'src/app/shared/component/pay-now-etransfer-send-request/pay-now-etransfer-send-request.component';
import { PayNowEtransferComponent } from 'src/app/shared/component/pay-now-etransfer/pay-now-etransfer.component';
import { PayNowSelectPaymentComponent } from 'src/app/shared/component/pay-now-select-payment/pay-now-select-payment.component';

export const DefaultLayoutRoutes: Routes = [
    { path : 'etransfer' , component : PayNowEtransferComponent},
    { path : 'etransfer-instructions' , component : PayNowEtransferInstructionsComponent},
    { path : 'etransfer-instructions-sent' , component : PayNowEtransferInstructionsSentComponent},
    { path : 'etransfer-send-request' , component : PayNowEtransferSendRequestComponent},
    { path : 'etransfer-send-request-sent' , component : PayNowEtransferSendRequestSentComponent},
    { path : 'select-payment' , component : PayNowSelectPaymentComponent},
];
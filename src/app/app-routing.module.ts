import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TransactionListComponent } from "./components/transaction-list/transaction-list.component";
import { TransactionDetailsComponent } from "./components/transaction-details/transaction-details.component";


const routes: Routes = [
  {
    path: "",
    component: TransactionListComponent
  },
  {
    path: "installments/:transactionId",
    component: TransactionDetailsComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}

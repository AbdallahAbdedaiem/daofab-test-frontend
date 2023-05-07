import { Component } from "@angular/core";
import { TransactionPageDTO } from "src/app/model/api/transaction-page-dto.model";
import { TransactionProjection } from "src/app/model/api/transaction-projection.model";
import { TransactionService } from "src/app/services/transaction.service";

@Component({
  selector: "app-transaction-list",
  templateUrl: "./transaction-list.component.html",
  styleUrls: ["./transaction-list.component.scss"]
})
export class TransactionListComponent {
  transactions: TransactionProjection[] = [];
  page: number = 1;
  readonly pageSize: number = 2;
  transactionsTotalCount = -1;


  constructor(private transactionService: TransactionService){}

  ngOnInit(): void {
    this.getTransactionsPage();
  }

  onPageChange(page: number) {
    this.page = page;
    this.getTransactionsPage();
  }

  private getTransactionsPage() {
    this.transactionService.getTransactionsPage(this.page - 1)
    .subscribe((data: TransactionPageDTO) => {
        this.transactions = data.transactions;
        this.transactionsTotalCount = data.totalCount;
      });
  }
}

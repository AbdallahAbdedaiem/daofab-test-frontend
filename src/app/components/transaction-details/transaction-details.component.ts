import { TransactionDTO } from './../../model/api/transaction-dto.model';
import { InstallmentDTO } from './../../model/api/installment-dto.model';
import { ActivatedRoute } from '@angular/router';
import { InstallmentService } from './../../services/installment.service';
import { Component, OnInit } from "@angular/core";
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: "app-transaction-details",
  templateUrl: "./transaction-details.component.html",
  styleUrls: ["./transaction-details.component.scss"]
})
export class TransactionDetailsComponent implements OnInit {
  transactionId!: number;
  transaction!: TransactionDTO;
  installments:  InstallmentDTO[] = [];
  constructor(private activatedRoute: ActivatedRoute,
              private installmentService: InstallmentService,
              private transactionService: TransactionService,
              ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.transactionId = params["transactionId"];
      this.fetchTransactionData();
    })
  }

  private fetchTransactionData() {
    this.transactionService.getTransaction(this.transactionId).subscribe((transaction: TransactionDTO) => {
        this.transaction = transaction;
        this.fetchTransactionInstallments();
    })
  }


  private fetchTransactionInstallments() {
    this.installmentService.getInstallmentsByTransaction(this.transactionId).subscribe((installments: InstallmentDTO[]) => {
      this.installments = installments;
    })
  }



}

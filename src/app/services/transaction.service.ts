import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { TransactionPageDTO } from "../model/api/transaction-page-dto.model";
import { Observable } from "rxjs";
import { TransactionDTO } from "../model/api/transaction-dto.model";

@Injectable({
  providedIn: "root"
})
export class TransactionService {
  private readonly BASE_URL = environment.apiBaseUrl + "/api/transactions"
  constructor(private http: HttpClient) {}

  getTransaction(transactionId: number): Observable<TransactionDTO> {
    return this.http.get<TransactionDTO>(this.BASE_URL + "/" + transactionId)
  }

  getTransactionsPage(page: number): Observable<TransactionPageDTO> {
    return this.http.get<TransactionPageDTO>(this.BASE_URL, {
      params: {
        page
      }
    });
  }

}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { InstallmentDTO } from "../model/api/installment-dto.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class InstallmentService {
  private readonly BASE_URL = environment.apiBaseUrl + "/api/installments"

  constructor(private http: HttpClient) {}

  getInstallmentsByTransaction(transactionId: number): Observable<InstallmentDTO[]> {
    return this.http.get<InstallmentDTO[]>(`${this.BASE_URL}/transaction/${transactionId}`);
  }

}

import { TransactionProjection } from "./transaction-projection.model";

export interface TransactionPageDTO {
  transactions: TransactionProjection[];
  totalCount: number;
}

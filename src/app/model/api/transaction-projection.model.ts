export interface TransactionProjection {
  id: number;
  receiver: string;
  sender: string;
  totalAmount: number;
  totalPaidAmount: number
}

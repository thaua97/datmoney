import { useContext } from "react";
import Context from '../context';

export function useTransactions() {
  const context = useContext(Context.TransactionContext);
  return context;
}
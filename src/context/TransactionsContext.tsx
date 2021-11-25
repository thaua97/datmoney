import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "../services/api";
import { TransactionInterface } from "../interfaces";

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext<TransactionInterface[]>([]);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionInterface[]>([]);

  useEffect(() => {
    getTransactions();
  }, []);

  async function getTransactions() {
    try {
      const res = await api.get("/transactions");

      console.log(res.data.transactions);

      setTransactions(res.data.transactions);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  );
}

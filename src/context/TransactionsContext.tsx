import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "../services/api";
import { TransactionInterface } from "../interfaces";

interface TransactionProviderProps {
  children: ReactNode;
}
interface TransactionContextData {
  transactions: TransactionInterface[],
  createTransaction: (Transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<TransactionInterface, 'id' | 'createdAt'>

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionInterface[]>([]);

  useEffect(() => {
    getTransactions();
  }, []);

  async function getTransactions() {
    try {
      const res = await api.get("/transactions");

      setTransactions(res.data.transactions);
    } catch (error) {
      console.log(error);
    }
  }

  async function createTransaction(payload: TransactionInput) {
    try {
      const 
        res = await api.post('/transactions', {
          ...payload,
          createdAt: new Date()
        }),
        { transaction } = res.data;

      setTransactions([...transactions, transaction]);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

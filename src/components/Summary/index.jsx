import React from 'react';
import { formatMoney } from '../../services/format';
import { useTransactions } from '../../hooks/useTransactions';

// styles
import { Container } from "./styles";

// assets
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
            
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    });

    return (
       <Container>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={incomeImg} alt="income" />
               </header>
               <strong>{formatMoney(summary.deposits)}</strong>
           </div>

           <div>
               <header>
                   <p>Saidas</p>
                   <img src={outcomeImg} alt="outcome" />
               </header>
               <strong>- {formatMoney(summary.withdraws)}</strong>
           </div>

           <div>
               <header>
                   <p>Total</p>
                   <img src={totalImg} alt="total" />
               </header>
               <strong>{formatMoney(summary.total)}</strong>
           </div>
       </Container>
    );
}
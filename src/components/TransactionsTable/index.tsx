import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import { api } from '../../services/api';
import { formatMoney, formatDate } from '../../services/format';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        getTransactions();
    }, []);

    async function getTransactions() {
        try {
            const res = await api.get('/transactions');

            console.log(res.data.transactions);

            setTransactions(res.data.transactions);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(item => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td className={item.type}>{formatMoney(Number(item.amount))}</td>
                            <td>{item.category}</td>
                            <td>{formatDate(item.createdAt)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}
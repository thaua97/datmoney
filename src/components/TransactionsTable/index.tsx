import { Container } from './styles';
import { formatMoney, formatDate } from '../../services/format';
import { useTransactions } from '../../hooks/useTransactions';


export function TransactionsTable() {

    const { transactions } = useTransactions()
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
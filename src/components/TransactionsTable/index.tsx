import React from 'react';
import { Container } from './styles';

export function TransactionsTable() {
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
                    <tr>
                        <td>Desenvolvumento de WebSite</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvumento</td>
                        <td>12/05/2021</td>
                    </tr>
                    <tr>
                        <td>Caixa</td>
                        <td className="withdraw">- R$ 450,00</td>
                        <td>Desenvolvumento</td>
                        <td>12/05/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
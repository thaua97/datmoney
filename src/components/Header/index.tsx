import { Container, Wrapper } from './styles';

import logo from '../../assets/logo.svg';
interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Wrapper>
                <img src={logo} alt="logo" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Wrapper>
        </Container>
    );
}
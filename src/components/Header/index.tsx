import { Container, Wrapper } from './styles';

import logo from '../../assets/logo.svg';

export function Header() {
    return (
        <Container>
            <Wrapper>
                <img src={logo} alt="logo" />
                <button type="submit">
                    Nova transação
                </button>
            </Wrapper>
        </Container>
    );
}
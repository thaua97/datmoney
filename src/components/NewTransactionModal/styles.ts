import styled from 'styled-components';
import { darken, transparentize } from 'polished';

import { colors } from '../../styles/colors';

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'ruby';
}

export const FormContainer = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: .25rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;
    outline-color: ${darken(.1, '#d7d7d7')};
    transition: border-color .2s ease;

    &::placeholder {
      color: var(--text);
    }

    &:hover {
      border-color: ${darken(.1, '#d7d7d7')};
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0 .25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;
    transition: filter .2s ease;

    &:hover {
      filter: brightness(.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .5rem;
`;

export const RadioBox = styled.button <RadioBoxProps>`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.isActive 
    ? transparentize(.9, colors[props.activeColor])
    : 'transparent'
  };
  border: 1px solid ${props => props.isActive 
    ? colors[props.activeColor]
    : '#d7d7d7'
  };
  border-radius: .25rem;
  transition: border-color .2s ease;

  &:hover {
    border-color: ${props => props.isActive 
      ? colors[props.activeColor]
      : darken(.1, '#d7d7d7')
    };
  }

  img {
    height: 20px;
    width: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--title);
  }
`;


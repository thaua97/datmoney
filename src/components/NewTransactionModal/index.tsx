import React, {useState, FormEvent} from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg'
import incomingImg from '../../assets/income.svg'
import outcomeingImg from '../../assets/outcome.svg'
import { api } from '../../services/api';

import { FormContainer, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalprops {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalprops) {
  const 
    [title, setTitle] = useState(''),
    [value, setValue] = useState(0),
    [type, setType] = useState('deposit'),
    [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const payload = {title, value, type, category,}

    try {
      const res = await api.post('/transactions', payload);
      console.log(res);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button" 
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="close modal" />
      </button>
  
      <FormContainer onSubmit={handleCreateNewTransaction}>
        <h2>cadastrar transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={e => setValue(Number(e.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            activeColor="green"
            isActive={type === 'deposit'}
            onClick={() => { setType('deposit') }}
          >
            <img src={incomingImg} alt="entrada de fundos" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            activeColor="ruby"
            isActive={type === 'withdraw'}
            onClick={() => {setType('withdraw')}}    
          >
            <img src={outcomeingImg} alt="saida de fundos" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          placeholder="Categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </FormContainer>
    </Modal>
  )
}
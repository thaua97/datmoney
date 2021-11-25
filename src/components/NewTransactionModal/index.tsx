import React, {useState, FormEvent} from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg'
import incomingImg from '../../assets/income.svg'
import outcomeingImg from '../../assets/outcome.svg'
import { useTransactions } from '../../hooks/useTransactions';

import { FormContainer, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalprops {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalprops) {
  const 
    { createTransaction } = useTransactions(),
    [title, setTitle] = useState(''),
    [amount, setAmount] = useState(0),
    [type, setType] = useState('deposit'),
    [category, setCategory] = useState('');

  function clearForm () {
    setTitle('');
    setAmount(0);
    setType('deposit');
    setCategory('');
  }
  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    await createTransaction({ 
      title,
      amount: amount, 
      category,
      type
    });

    clearForm();
    onRequestClose();
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
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
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
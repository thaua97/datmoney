import React, {useState} from "react";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';

// Components
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleNewTransactionModal() {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}

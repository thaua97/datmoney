import React from "react";
import { GlobalStyle } from "./styles/global";

// Components
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { TransactionsTable } from "./components/TransactionsTable";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

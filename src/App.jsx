import React from "react";
import Header from "./assets/components/Header";
import './App.css'
import Balance from "./assets/components/Balance";
import IncomeExpenses from "./assets/components/IncomeExpenses";
import TransactionList from "./assets/components/TransactionList";
import AddTransaction from "./assets/components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
};

export default App;

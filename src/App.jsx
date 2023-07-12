import React from "react";
import Header from "./assets/components/Header";
import './App.css'
import Balance from "./assets/components/Balance";
import IncomeExpenses from "./assets/components/IncomeExpenses";
import TransactionList from "./assets/components/TransactionList";
import AddTransaction from "./assets/components/AddTransaction";

const App = () => {
  return (
    <div>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
  );
};

export default App;

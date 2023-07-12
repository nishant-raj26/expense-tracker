import React, { useState } from "react";

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0 )
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text" style = {{color:'#333'}}>Text</label>
          <input type="text" value = {text} onChange={(event) => setText(event.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount" style = {{color:'#333'}} >
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number"value = {amount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;

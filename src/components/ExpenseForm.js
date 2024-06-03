import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteExpense } from '../features/ExpenseSlice';
import { addExpense } from '../features/ExpenseSlice';

const ExpenseList = () => {
  
const expenses = useSelector(state => state.expense.expenses);
console.log("Expenses",expenses);
const dispatch = useDispatch();

const handleDeleteExpense = (id) => {
  dispatch(deleteExpense(id));
};

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!name || !amount || !category) return;
    const id = Date.now();
    dispatch(addExpense({ id, name, amount: parseFloat(amount), category })); 
    setName('');
    setAmount('');
    setCategory('');
  };
  
  return (
    <div>
      <h2>Add Expense</h2>
      <form className="expense-form" onSubmit={handleAddExpense}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Expense Name"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <button type="submit">Add Expense</button>
      </form>

      <h2>Expense List</h2>
      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense.id} className="expense-item">
            {expense.name} - Rs. {expense.amount} [{expense.category}]
            <button onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;

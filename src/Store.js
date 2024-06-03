import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './features/ExpenseSlice';

const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
});

export default store;

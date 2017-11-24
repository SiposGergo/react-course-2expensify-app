import { createStore, combineReducers } from "redux";
import uuid from "uuid";










//timestamps in milliseconds
// 1970. 01. 01. unix epoch
// 33400, 100 ,-50



// store creation



store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne =
    store.dispatch(addExpense({ description: "rent", amount: 400, createdAt: -2000 }));
const ExpenseTwo =
    store.dispatch(addExpense({ description: "coffee", amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(ExpenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter("e"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(-2500));
// store.dispatch(setStartDate());
store.dispatch(setEndDate(5000));

const demoState = {
    expenses: [{
        id: "dfgdfhgbmvfg,mfm",
        description: "January rent",
        note: "final payment",
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount", //date or amount
        startDate: undefined,
        endDate: undefined
    }
}

// const user = {
//     name: "jen",
//     age: 24
// };

// console.log({ ...user, location:"asdfgh", age:27 });
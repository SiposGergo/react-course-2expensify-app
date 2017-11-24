import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";

import 'normalize.css/normalize.css';
import "./styles/styles.scss";
import "react-dates/initialize";
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: "water bill", createdAt: 1000, amount: 1000 }));
store.dispatch(addExpense({ description: "gas bill", createdAt: 1112, amount: 500 }));
store.dispatch(addExpense({ description: "rent", createdAt: 1200, amount: 109500 }));

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app")); 
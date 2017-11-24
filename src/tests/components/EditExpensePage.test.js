import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let removeExpense, editExpense, history, wrapper;

beforeEach(() => {
    removeExpense = jest.fn();
    editExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage
        removeExpense={removeExpense}
        history={history}
        editExpense={editExpense} 
        expense={expenses[1]}/>)
});

test("should render edit expense page correctl", () => {
    expect(wrapper).toMatchSnapshot();
})

test("should should handel edit", () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
})

test("should should handel remove", () => {
    wrapper.find("button").prop("onClick")(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[1].id})
})
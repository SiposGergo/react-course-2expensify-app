import expensesReducer from "../../reducers/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses"


test("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
})

test("should remove expense by id", () => {
    const state = expensesReducer(expenses, { type: "REMOVE_EXPENSE", id: expenses[1].id });
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test("should not remove expense if id not found", () => {
    const state = expensesReducer(expenses, { type: "REMOVE_EXPENSE", id: -1 });
    expect(state).toEqual(expenses);
})

test("should add expense", () => {
    const newExpense = { id: 4, description: "new expense", createdAt: 0, amout: 55 }
    const state = expensesReducer(expenses, { type: "ADD_EXPENSE", expense: newExpense });
    expect(state).toEqual([...expenses, newExpense]);
})

test("should edit expense", () => {
    const state = expensesReducer(expenses,
        {
            type: "EDIT_EXPENSE",
            id: expenses[0].id,
            updates: { description: "new description" }
        });
    expect(state[0].description).toBe("new description");
})

test("should not edit expense with fake id", () => {
    const state = expensesReducer(expenses,
        {
            type: "EDIT_EXPENSE",
            id: -1,
            updates: { description: "new description" }
        });
    expect(state).toEqual(expenses);
})
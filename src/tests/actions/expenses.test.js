import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should set up removee xpense action obejct", () => {
    const action = removeExpense({ id: "123abc" });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

test("should set up editExpense action object", () => {
    const action = editExpense("abc123", { a: 1 });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "abc123",
        updates: { a: 1 }
    });
});

test("should set up add expense action object with provided values", () => {
    const expenseData = {
        description: "rent",
        amount: 1050,
        createdAt: 1000,
        note: "my note"
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: { ...expenseData, id: expect.any(String) },
    });
});

test("should set up add expense action object with no provided values", () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "",
            note: "",
            createdAt: 0,
            amount: 0
        },
    });
});
import selectTotalExpenses from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("total should be 0 with undefined array", () => {
    const total = selectTotalExpenses();
    expect(total).toBe(0);
});

test("total should be 0 with empty array", () => {
    const total = selectTotalExpenses([]);
    expect(total).toBe(0);
});

test("total should be correct with array from fixture", () => {
    const total = selectTotalExpenses(expenses);
    expect(total).toBe(114195);
});

test("total should be correct with one expense", () => {
    const total = selectTotalExpenses([expenses[0]]);
    expect(total).toBe(expenses[0].amount);
});
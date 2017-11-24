import filtersReducer from "../../reducers/filters"
import moment from "moment";

test("should set up default flter values", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    });
});

test("should set sortby amount", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect(state.sortBy).toBe("amount");
});

test("should set sortby date", () => {
    const currentState = {
        text: "",
        startDate: undefined,
        endDate: undefined,
        sortby: "amount"
    };
    const action = { type: "SORT_BY_DATE" }
    const state = filtersReducer(undefined, action);
    expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
    const state = filtersReducer(undefined, { type: "SET_TEXT_FILTER", text: "ASD" });
    expect(state.text).toBe("ASD");
});

test("should set start date", () => {
    const date = moment();
    const state = filtersReducer(undefined, { type: "SET_START_DATE", value: date });
    expect(state.startDate).toEqual(date);
});

test("should set end date", () => {
    const date = moment();
    const state = filtersReducer(undefined, { type: "SET_END_DATE", value: date });
    expect(state.endDate).toEqual(date);
});
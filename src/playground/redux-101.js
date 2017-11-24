import { createStore } from "redux";

//action generators
const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: "INCREMENT",
        incrementBy
    }
}

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
}
)

const setCount = ({ setTo = 0 } = {}) => ({
    type: "SET",
    setTo
})

const reset = () => ({ type: "RESET" });


// Reducers
// pure functions: output is only determined by input
// never change state or action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            }
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }
        case "RESET":
            return {
                count: 0
            }
        case "SET":
            return {
                count: action.setTo
            }
        default:
            return state
    }
}

//this.setState((prevState)=>)
const store = createStore(countReducer);

//ez mindig lefut ha változik az állapot
const unsunscribe = store.subscribe(() => {
    console.log(store.getState());
});



//increment
// reset
// change the data?????????   <<======= ACTIONS
// inc dec reset
// an object that gets sends to the store

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 3
});

store.dispatch(decrementCount({ decrementBy: 4 }));

store.dispatch(setCount({ setTo: 99 }));


store.dispatch(reset());

// fgvt ad vissza ha meghívjuk nem futle
unsunscribe();

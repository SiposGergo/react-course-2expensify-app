


//this.setState((prevState)=>)
const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            const incrementBy = typeof action.incrementBy === 'number'
                ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }
        case "DECREMENT":
            const decrementBy = typeof action.decrementBy === 'number'
                ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            }
        case "RESET":
            return {
                count: 0
            }
        case "SET":
            const count = typeof action.count === 'number'
                ? action.count : state.count
            return {
                count: count
            }
        default:
            return state
    }
});

//ez mindig lefut ha változik az állapot
const unsunscribe = store.subscribe(() => {
    console.log(store.getState());
});



//increment
// reset
// change the data?????????   <<======= ACTIONS
// inc dec reset
// an object that gets sends to the store

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});


store.dispatch({
    type: 'INCREMENT'
});


store.dispatch({
    type: 'DECREMENT',
    decrementBy: 3
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: "SET",
    count: 111
});

// fgvt ad vissza ha meghívjuk nem futle
unsunscribe();

store.dispatch({
    type: "RESET"
});


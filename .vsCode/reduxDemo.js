const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {

    if (action.type === 'INCREAMENT2') return { counter: state.counter + 2}
    if (action.type === 'DECREAMENT2') return { counter: state.counter - 2 }

    return state;

}

const store = redux.createStore(counterReducer);

const counterSubs = () => {
    const currentState = store.getState();
    console.log(currentState);
}


store.subscribe(counterSubs)
store.dispatch({ type: 'INCREAMENT2' })
store.dispatch({ type: 'INCREAMENT2' })
store.dispatch({ type: 'INCREAMENT2' })
store.dispatch({ type: 'INCREAMENT2' })
store.dispatch({ type: 'INCREAMENT2' })
store.dispatch({ type: 'DECREAMENT2' })
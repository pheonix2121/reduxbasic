const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {

    if (action.type === 'INCREAMENT') return { counter: state.counter + 1 }
    if (action.type === 'DECREAMENT') return { counter: state.counter - 1 }

    return state;

}

const store = redux.createStore(counterReducer);

const counterSubs = () => {
    const currentState = store.getState();
    console.log(currentState);
}

store.subscribe(counterSubs)
store.dispatch({ type: 'INCREAMENT' })
store.dispatch({ type: 'INCREAMENT' })
store.dispatch({ type: 'INCREAMENT' })
store.dispatch({ type: 'INCREAMENT' })
store.dispatch({ type: 'INCREAMENT' })
store.dispatch({ type: 'DECREAMENT' })
const redux = require('redux');
const createStore = redux.createStore;

// Initial State of the application
const initialState = {
    counter : 0
}

// Create a Simple reducer
const rootReducer = (state=initialState, action)=>{
    switch(action.type){
    case 'ADD_COUNTER':
        return {
            ...state, 
            counter: action.value
        }
        }
    return state;
}

// Create store 
const store = createStore(rootReducer);
console.log(store.getState());


// Subscription
store.subscribe(()=>{
    console.log('after subscribe', store.getState());
});

// Dispatch Actions 
store.dispatch({type: 'ADD_COUNTER',value:2});
console.log(store.getState());

store.subscribe(()=>{
    console.log('after subscribe', store.getState());
});
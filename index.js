const redux = require('redux')
const createStore = redux.createStore 

const BUY_CAKE = 'BUY_CAKE'

function buycake() {
    return {
        type: BUY_CAKE,
        info: 'first redux actions'
    }
}

const initialState = {
    numOfCakes: 45
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_CAKE': return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const store = createStore(reducer)
console.log('Initial State', store.getState())
const unsbscribe = store.subscribe(() => {
    console.log('Updated State', store.getState())
})

store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())   

unsbscribe()
const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buycake() {
    return {
        type: BUY_CAKE,
        info: 'first redux actions'
    }
}
function buyicecream() {
    return {
        type: BUY_ICECREAM,
        info: 'first redux actions'
    }
}

// const initialState = {
//     numOfCakes: 45,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCreams: 20
}

const cakereducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case 'BUY_CAKE': return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const icecreamreducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case 'BUY_ICECREAM': return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}
const rootReducer = combineReducer({
    cake: cakereducer,
    icecream: icecreamreducer
})

const store = createStore(rootReducer)
console.log('Initial State', store.getState())
const unsbscribe = store.subscribe(() => {
    console.log('Updated State', store.getState())
})

store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())

unsbscribe()
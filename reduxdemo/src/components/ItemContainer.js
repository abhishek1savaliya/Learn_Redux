import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from './redux/iceCream/iceCreamAction'
import { buyCake } from './redux/cake/cakeAction'

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.numOfCake : state.iceCream.numOfIceCreams
  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())


  return {
    buyItem: dispatchFunction
  }
}
export default connect(null, mapDispatchToProps)(ItemContainer)

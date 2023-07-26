import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from './redux/cake/cakeAction'

function CakeCOntainer(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCake}</h2>
            <button onClick={props.buyCake}>Buy Cakes </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCake: state.numOfCake
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeCOntainer)

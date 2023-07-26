import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from './redux/cake/cakeAction'

function HooksCakeContainer() {
   const numOfCake = useSelector(state=>state.numOfCake)
  const dispatch =  useDispatch()
  return (
    <div>
      <h2>Num of Cakes - {numOfCake}</h2>
      <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer

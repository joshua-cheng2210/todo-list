import React from 'react'
import PropTypes from "prop-types"
import { ACTIONS } from '../constants.jsx'

function InputTodo(props) {
  return (
    <div>
        <form 
            onSubmit={(e) => {
            e.preventDefault()
            // console.log("submitting this item to add", state)
            props.updateState({action: ACTIONS.ADD_ITEM, payload: props.newItem})
            // console.log(state)
            }}
        >
            <label>new item: </label>
            <input 
            type="text" 
            name="newList" 
            placeholder="What would like to work on today?"
            value = {props.newItem}
            onChange={(e) => {
                props.updateState({action: ACTIONS.UPDATING_NEW_ITEM, payload: e.target.value})
            }}
            ></input>
            <button onClick={
            ()=> props.updateState({type: ACTIONS.ADD_ITEM, payload: props.newItem})
            }>submit item</button>
        </form>

    </div>
  )
}

InputTodo.PropTypes = {
    updateState: PropTypes.string.isRequired,
    state: PropTypes.object.isRequired
    
}

export default InputTodo

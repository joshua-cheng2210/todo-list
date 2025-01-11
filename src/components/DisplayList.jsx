import React from 'react'
import PropTypes from "prop-types"
import { ACTIONS } from '../constants.jsx'

function DisplayList(props) {
    return (
        <div>
            {props.ItemsList.map((item, index) => (
                <div key = {index}>
                    <input 
                        type="checkbox" 
                        id={`checkbox-${index}`} 
                        onChange={() => (props.updateState({action: ACTIONS.TOGGLE_CHECKBOX, indexToToggle: index}))}
                    />
                    <label 
                        htmlFor={`checkbox-${index}`} 
                        style = {{ textDecoration: item.checked ? 'line-through' : 'none' }}
                    > {item.todo} </label>
                    <button onClick={() => props.updateState({action: ACTIONS.DELETE_ITEM, indexToDelete: index})}> delete </button>
                </div>
            ))}
        </div>
    )
}

DisplayList.PropTypes = {
    ItemsList: PropTypes.array.isRequired,
    updateState: PropTypes.func.isRequired
}

export default DisplayList

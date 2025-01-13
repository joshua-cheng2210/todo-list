import React from 'react'
import PropTypes from "prop-types"
import { ACTIONS } from '../constants.jsx'

function DisplayList(props) {
    return (
        <div className="display-list">
            {props.ItemsList.map((item, index) => (
                <div key = {index}>
                    <input 
                        className="display-list-checkbox"
                        type="checkbox" 
                        id={`checkbox-${index}`} 
                        onChange={() => (props.updateState({action: ACTIONS.TOGGLE_CHECKBOX, indexToToggle: index}))}
                    />
                    <label 
                        // className="display-list-label"
                        className={`display-list-label ${item.checked ? 'checked' : ''}`}
                        htmlFor={`checkbox-${index}`} 
                        // style = {{ textDecoration: item.checked ? 'line-through' : 'none' }}
                        // className={item.checked ? 'checked' : ''}
                    > {item.todo} </label>
                    <button 
                        className="display-list-del"
                        onClick={() => props.updateState({action: ACTIONS.DELETE_ITEM, indexToDelete: index})}
                    > delete </button>
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

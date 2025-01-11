import React from 'react'
import PropTypes from "prop-types"
import { ACTIONS } from '../App'

function DisplayList(props) {
    return (
        <div>
            {props.ItemsList.map((item, index) => (
                <div key = {index}>
                    <input type="checkbox" id={`checkbox-${index}`} />
                    <label htmlFor={`checkbox-${index}`} > {item} </label>
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

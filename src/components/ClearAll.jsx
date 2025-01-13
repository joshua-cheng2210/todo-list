import React from 'react'
import PropTypes from "prop-types"
import { ACTIONS } from '../constants.jsx'

function ClearAll(props) {
  return (
    <div>
        <form>
            <button 
              className="display-list-AC"
              onClick={(e) => {
              e.preventDefault()
              props.updateState({action: ACTIONS.CLEAR_ALL})
        }}> CLEAR ALL TODOs! GIVE UP?</button>
        </form>

    </div>
  )
}

ClearAll.PropTypes = {
    updateState: PropTypes.string.isRequired,
}

export default ClearAll

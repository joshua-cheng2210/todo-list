import { useReducer } from 'react'
import './App.css'
import DisplayList from './components/DisplayList.jsx'

export const ACTIONS={
  ADD_ITEM: "add-item",
  UPDATING_NEW_ITEM: "updating-new-item",
  DELETE_ITEM: "delete-item",
  CLEAR_ALL: "clear-all",
  NEW_LIST: "new-list"
}
function reducer(state, props){
  console.log("calling reducer")
  switch(props.action){
    case ACTIONS.ADD_ITEM:
      if (props.payload === ""){
        return state
      } else{
        console.log("adding item")
        return {
          ...state,
          itemsList: [
            ...state.itemsList,
            props.payload
          ],
          newItem: ""
        }
    }
    case ACTIONS.UPDATING_NEW_ITEM:
      console.log(props.payload)
      if (props.payload == "") {
        return state
      } else{
        return {
          ...state,
          // newItem: `${state.newItem}${props.payload}` // props.payload which is inputed from the textbox will normally be the full string in the textbox and nor jsut the latest character
          newItem: props.payload
        }
    }
    case ACTIONS.DELETE_ITEM:
      return {
        ...state,
        itemsList: state.itemsList.filter((_, index) => index !== props.indexToDelete)
      }
    default:
      return state
  }
}

function getListComponent(ItemsList, updateState){
  return <DisplayList ItemsList={ItemsList} updateState={updateState}></DisplayList>
}


function App() {
  const [state, updateState] = useReducer(reducer, {itemsList: [], newItem: ""});

  return (
    <div>
      
      <div className='Heading Title'><h1>Todo-list</h1></div>
      
      <form 
        onSubmit={(e) => {
          e.preventDefault()
          console.log("submitting this item to add", state)
          updateState({action: ACTIONS.ADD_ITEM, payload: state.newItem})
          // console.log(state)
      }}
      >
        <label>new item: </label>
        <input 
          type="text" 
          name="newList" 
          placeholder="What would like to work on today?"
          value = {state.newItem}
          onChange={(e) => {
            updateState({action: ACTIONS.UPDATING_NEW_ITEM, payload: e.target.value})
          }}
        ></input>
        <button onClick={
          ()=> updateState({type: ACTIONS.ADD_ITEM, payload: state.newItem})
        }>submit item</button>
      </form>

      {/* <div>
        <DisplayList></DisplayList>
      </div> */}
      <div>
        {getListComponent(state.itemsList, updateState)}
      </div>
    </div>
  )
}

export default App

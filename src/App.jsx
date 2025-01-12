import { useReducer } from 'react'
import './App.css'
import DisplayList from './components/DisplayList.jsx'
import InputTodo from './components/InputTodo.jsx'
import ClearAll from './components/ClearAll.jsx'
import { ACTIONS } from './constants.jsx'

function reducer(state, props){
  // console.log("calling reducer")
  switch(props.action){
    case ACTIONS.ADD_ITEM:
      if (props.payload === ""){
        return state
      } else {
        // console.log("adding item")
        let itemX = {
          todo: props.payload,
          checked: false
        }
        return {
          ...state,
          itemsList: [
            ...state.itemsList,
            itemX
          ],
          newItem: ""
        }
    }
    case ACTIONS.UPDATING_NEW_ITEM:
      // console.log(props.payload)
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
    case ACTIONS.TOGGLE_CHECKBOX:
      if (props.indexToToggle === ""){
        return state
      } else {
        return { // learnings: you cant access the index and change the state like itemsList[index].checked = !itemsList[index].checked. YOU NEED TO RETURN THE NEW STATE
          ...state,
          itemsList: state.itemsList.map((itemX, index) => 
            index === props.indexToToggle ? { ...itemX, checked:  !itemX.checked
          } : itemX
        )}
      }
    case ACTIONS.CLEAR_ALL:
      return {
        ...state,
        itemsList: []
      }
      // return {}
    default:
      return state
  }
}

function getListComponent(itemsList, updateState){
  return <DisplayList ItemsList={itemsList} updateState={updateState}></DisplayList>
}

function getInputTodoComponent(newToDoItem, updateState){
  return <InputTodo newItem={newToDoItem} updateState={updateState}></InputTodo>
}

function getClearAllComponent(todoList, updateState){
  return todoList.length >= 5 && <ClearAll updateState={updateState}></ClearAll>
}


function App() {
  const [state, updateState] = useReducer(reducer, {itemsList: [], newItem: ""});

  return (
    <div>
      
      <div className='Heading-Title'><h1>Todo-list</h1></div>
      
      {/* <form 
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
      </form> */}
      <div>
        {getClearAllComponent(state.itemsList, updateState)}
      </div>

      <div>
        {getInputTodoComponent(state.newItem, updateState)}
      </div>

      <div>
        {getListComponent(state.itemsList, updateState)}
      </div>
    </div>
  )
}

export default App

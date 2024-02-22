import React from 'react'
import "./app.scss"
import { FaTrashCanArrowUp } from "react-icons/fa6";

export default function App() {
  const table = [];
  return (
    <div className='all'>
      <div className='top_content'>
        <p className='title'>Todo List
          <p>Get things done. one item at a time.
            <i className='line'></i></p>
          </p>
        
      </div>
      <div className='body_content'>
        
      </div>
      <form className='bot_content'>
        <h3>Add to the todo list</h3>
        <input type="text" />
        <button onClick={(()=>{
          handleCreatetodo()
        })}>ADD ITEM</button>
      </form>
    </div>
  )
}

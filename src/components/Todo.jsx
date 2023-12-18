// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"


const Todo = ({task, toggleComplete, deleteTask, editTask}) => {


   


  return (
    <div className={`Todo ${task.completed ? 'completed' : "" }`}>
     <p onClick={() => toggleComplete(task.id)}>{task.task}</p>
     <div>
      <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTask(task.id)}/>
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} />
     </div>
    </div>
  )
}

export default Todo
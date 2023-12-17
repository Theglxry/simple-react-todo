// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"


const Todo = ({task, toggleComplete, deleteTask}) => {


   


  return (
    <div className={`Todo ${task.completed ? 'completed' : "" }`}>
     <p onClick={() => toggleComplete(task.id)}>{task.task}</p>
     <div>
      <FontAwesomeIcon icon={faPenToSquare} />
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} />

     </div>
    </div>
  )
}

export default Todo
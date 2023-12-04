import React from 'react';
import { MdDelete } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";


const Task = ({task , deleteTodo , index, handleEdit}) => {

  return (
    <div className='task'>
        <h2> {task} </h2>
        <span className='delete-btn' onClick={() => deleteTodo(index)}> <MdDelete/> </span>
        <span className='edit-btn' onClick={() => handleEdit(index)}> <AiTwotoneEdit/> </span>

    </div>
  )
}

export default Task;
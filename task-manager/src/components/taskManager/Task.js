import React from "react";
import { FaCheckDouble, FaEdit, FaTrashAlt } from "react-icons/fa";

function Task({id, name, date, completed, editTask, deleteTask, completeTask}) {
  return (
    <div key={id} className={completed ? "task completed" : "task"}>
      <span>
        <p>
          <b>Task</b> {name}
        </p>
        <p>
          <b>Date</b>{date}
        </p>
      </span>
      <span>
        <button onClick={()=> editTask(id)}>
          <FaEdit color="green" size={15}/>
        </button>
        <button onClick={()=> deleteTask(id)}>
          <FaTrashAlt color="red" size={15}/>
        </button>
        <button onClick={()=> completeTask(id)}>
          <FaCheckDouble color="purple" size={15}/>
        </button>
      </span>
    </div>
  );
}

export default Task;

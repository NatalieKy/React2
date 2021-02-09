import React from 'react';
import Task from "./Task";

function Tasks({tasks, deleter, inputChange}) {
    return (
        <div>
            {
               tasks.length > 0 && (
                   tasks.map(task => <Task task={task} deleter={deleter} key={task.id}/>)
               )
            }
            {
                tasks.length <= 0 && (
                    <div>No tasks left!</div>
                )
            }
        </div>
    );
}

export default Tasks;

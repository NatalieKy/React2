import React, {useState} from 'react';
import './task.css'

function Task({task, deleter}) {

    const [newTask, setTask] = useState(task)

    const priorityChanger = (task) => {
        setTask(task.priority = !task.priority)
        console.log(task.priority)
    }

    return (
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li
                        id={`${task.priority ? "container" : ''}`}
                        onDoubleClick={() => {deleter(task.id)}}
                        className="list-group-item">{task.name}
                        <hr/>
                        <label>Set priority</label>
                            <input
                                className="custom-control custom-checkbox"
                                type="checkbox"
                                onChange={() => {priorityChanger(task)}}
                            />
                    </li>

                </ul>
            </div>
    );
}

export default Task;

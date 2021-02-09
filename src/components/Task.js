import React from 'react';

function Task({task, deleter}) {
    return (
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li onDoubleClick={() => {deleter(task.id)}} className="list-group-item">{task.name}</li>
                </ul>
            </div>
    );
}

export default Task;

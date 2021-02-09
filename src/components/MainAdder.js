import React, {useState} from 'react';

import Tasks from './Tasks'
import {defaultTasks} from '../defaultTasks'
import MainForm from "./MainForm";

function MainAdder(props) {

    const [tasks, setTasks] = useState(defaultTasks)

    const taskAdder = (e) => {
        e.preventDefault()
        let x = document.getElementById('mainer')
        setTasks([...tasks, {id: Math.random() * 100, name: x.value}])
    }

    const deleter = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <div>
            <div className="card">
                <h3 className="card-header">Task tracker</h3>
                <div className="card-body">
                    <p className="card-text">Please type Your task below</p>
                    <MainForm taskAdder={taskAdder}/>
                    <hr/>
                    <Tasks tasks={tasks} deleter={deleter} />
                </div>
            </div>
        </div>
    );
}

export default MainAdder;

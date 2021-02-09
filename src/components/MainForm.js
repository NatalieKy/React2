import React from 'react';

function MainForm({taskAdder}) {
    return (
        <div>
            <form className="input-group">
                <input id="mainer" type="text" className="form-control" placeholder="add task" aria-label=""
                       aria-describedby="basic-addon1"/>
                <div className="input-group-append">
                    <button className="btn btn-success" type="submit" onClick={taskAdder}>Add</button>
                </div>
            </form>
        </div>
    );
}

export default MainForm;

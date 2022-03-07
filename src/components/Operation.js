import React, { useState } from 'react';
import "../scss/OperationList.scss"

const Operation = ({ description, timeSpent, handleRemoveOperation, addTimeOperation, id }) => {
    const [timeOperation, setTimeOperation] = useState(0);
    const [showform, setShowForm] = useState(false);
    const [newTime, setNewTime] = useState(timeSpent);

    const checkTime = () => {
        setNewTime(prevState => parseInt(prevState) + parseInt(timeOperation));
        addTimeOperation(id, newTime, description)
        setShowForm(false);
    }
    const showTime = (minutes) => {
        let hour = 0;
        while (minutes >= 60) {
            hour++;
            minutes = minutes - 60;
        }
        return <span>{hour + "h " + minutes + "m"}</span>
    }

    return (<li key={id}><p>{description} {newTime > 0 ? showTime(newTime) : <span>0m</span>}</p>
        {showform && <div className='addTime'>
            <input type="number" onChange={e => setTimeOperation(e.target.value)} placeholder="Spent time in minutes" />
            <div>
                <button onClick={() => checkTime()}><i className="fas fa-save"></i>
                </button>
                <button onClick={() => setShowForm(false)}><i className="fas fa-times"></i>
                </button>
            </div>

        </div >}
        {!showform && < div className='startOperation' >
            <button onClick={() => setShowForm(true)}>Add time <i className="fas fa-clock"></i>
            </button>
            <button onClick={() => handleRemoveOperation(id)}><i className="fas fa-trash"></i>
            </button>
        </div>}
    </li>);
}

export default Operation;
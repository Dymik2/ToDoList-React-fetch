import React, { useState } from "react";
import { createOperation, removeOperation, updateOperation } from "../api/operations";
import Operation from "./Operation";
import "../scss/OperationList.scss"

const OperationList = ({ taskId, operations, setOperations, form, setForm }) => {

    const [textOpertion, setTextOperation] = useState("");
    const addOperations = (e) => {
        e.preventDefault();

        const operation = {
            description: textOpertion,
            timeSpent: 0
        };

        createOperation(taskId, operation, data => {
            console.log(data);
            setOperations(prevState => {
                return [
                    data, ...prevState
                ];
            });

            setForm(false);
            setTextOperation("");
        });
        setForm(false);
    }

    const handleRemoveOperation = (id) => {

        setOperations(operations.filter(operation => operation.id !== id))
        removeOperation(id,
            operations
        )
    }

    const addTimeOperation = (id, timeOperation, textOpertion) => {
        const operation = {
            description: textOpertion,
            timeSpent: timeOperation
        };
        console.log(operation);
        updateOperation(id, operation, data => {
            // Update local time spent state
            /* setTimeSpent(data.timeSpent);
       
             // Hide form
             setTimeSpentForm(false);
             setTimeSpentInput("");*/
            //setTimeOperation(data.timeOperation);
            console.log("test");
        });

    }

    return (
        <div className="operationList">
            {form && <form action="" className="mainFormOperation">
                <input type="text" placeholder="Opertion" onChange={e => setTextOperation(e.target.value)} />
                <button onClick={e => addOperations(e)}>Add <i className="fas fa-plus-circle"></i></button>
            </form>}
            <ul>
                {operations.map((el) => {
                    console.log(el);
                    return <Operation description={el.description} timeSpent={el.timeSpent} handleRemoveOperation={handleRemoveOperation} addTimeOperation={addTimeOperation} id={el.id} />
                })}
            </ul>
        </div>
    );
}

export default OperationList;
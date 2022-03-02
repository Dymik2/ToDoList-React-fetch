import React, { useState } from "react";
import { createOperation, removeOperation } from "../api/operations";
import Operation from "./Operation";

const OperationList = ({ taskId, operations, setOperations, form, setForm }) => {

    const [textOpertion, setTextOperation] = useState("");
    const addOperations = (e) => {
        e.preventDefault();

        const operation = {
            description: textOpertion,
            timeSpent: 0
        };

        createOperation(taskId, operation, data => {


            setOperations(prevState => {
                return [
                    data,
                    ...prevState
                ];
            });

            setForm(false);
            setTextOperation("");
        });

        console.log(textOpertion);
        setForm(false);
    }

    const handleRemoveOperation = (id) => {

        setOperations(operations.filter(operation => operation.id !== id))
        removeOperation(id,
            operations
        )
        console.log(operations);
        console.log(id);
    }


    return (
        <div >
            {form && <form action="">
                <input type="text" placeholder="Opertion" onChange={e => setTextOperation(e.target.value)} />
                <button onClick={e => addOperations(e)}>Add</button>
            </form>}
            <ul>

                {operations.map((el) => {

                    return <Operation index={el.id} description={el.description} handleRemoveOperation={handleRemoveOperation} id={el.id} />
                })}
            </ul>
        </div>
    );
}

export default OperationList;
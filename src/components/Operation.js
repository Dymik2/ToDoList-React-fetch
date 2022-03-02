import React from 'react';

const Operation = ({ index, description, handleRemoveOperation, id }) => {


    return (<li key={index}>{description} <button>Add time</button> <button onClick={() => handleRemoveOperation(id)}>Finish</button> </li>);
}

export default Operation;
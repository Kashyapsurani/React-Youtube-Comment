import React, { useState } from 'react';
import './Comment.css';

function ToDoList() {
    const [namesList, setNamesList] = useState([]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');

        setNamesList((prevNamesList) => [...prevNamesList, name]);
    };

    return (
        <>
            <div className="main">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Write A Comment : <textarea name="name" required />
                        </label> <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>

                <div className="value">
                    {namesList.map((nameItem, index) => (
                        <li key={index}>{nameItem}</li>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ToDoList;

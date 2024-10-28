import React from 'react';

const Note = ({id, title, content, isImportant, onChangeStatus = f => f, onDelete = f => f}) => {
    return (<>
        <li>
            <span className="badge text-bg-primary">{title}</span>
            <span className={isImportant ? "badge text-bg-dark" : "badge text-bg-light"}>{content}</span>
            <button onClick={() => onChangeStatus(id, isImportant)}>{isImportant ? "Important" : "Normal"}</button>
            <button className="delete" onClick={() => onDelete(id)}>Delete</button>
        </li>
    </>)
}

export default Note;

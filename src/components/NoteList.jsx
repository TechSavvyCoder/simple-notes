import React from 'react';
import Note from './Note';

const NoteList = ({notesData, onChangeStatus = f => f, onDelete = f => f}) => {
    return (<>
    {notesData.length === 0 && <p>There are no notes to render. Please enter a new note!</p>}
    <ul>
        {
            notesData.map(
                note => <Note 
                    key={note.id}
                    {...note}
                    onChangeStatus = {onChangeStatus}
                    onDelete = {onDelete}
                />
            )
        }
    </ul>
    </>);
}

export default NoteList;

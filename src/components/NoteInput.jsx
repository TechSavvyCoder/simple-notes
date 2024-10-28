import React, { useState } from 'react';

const NoteInput = ({addNote = f => f}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const submitNote = (e) => {
        e.preventDefault();

        if (!title ||!content) {
            alert("Title/Content can't be empty");
            return false;
        } else {
            addNote(title, content);
        }

        setTitle("");
        setContent("");
    }

    return (<form onSubmit={submitNote}>
        <input type="text" 
            placeholder="Add the note title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <textarea 
            placeholder="Add the note content" 
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />
        <button>Add Note</button>
    </form>);
}

export default NoteInput;
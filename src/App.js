import { useState } from 'react';
import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import notes from './services/sample-notes-data.json';
import NoteList from './components/NoteList';
import NoteInput from './components/NoteInput';
import { v4 } from 'uuid';

function App() {
  const d = new Date();
  const currentDate = d.toLocaleDateString('en-US', { day: 'numeric', month: 'numeric',  year: 'numeric' });

  const [notesData, setNoteStatus] = useState(notes);

  const onChangeStatus = (id, noteStatus) => {
    const updatedNotes = [...notesData];
    const noteIndex = updatedNotes.findIndex(note => note.id === id);

    if (noteIndex > -1) {
      updatedNotes[noteIndex].isImportant = !noteStatus;
      setNoteStatus(updatedNotes);
    }
  }

  const onDelete = (id) => {
    console.log("Delete");
    const updatedNotes = notesData.filter(note => note.id!== id);
    setNoteStatus(updatedNotes);    
  }

  const addNote = (title, content) => {
    const newNote = {
      id: v4(),
      title: title,
      content: content,
      isImportant: false
    };

    setNoteStatus([...notesData, newNote]);
  }

  return (
    <div className="App">
      <header>
        <h1>Personal Notes App</h1>
      </header>

      <section>
        <h4>Please enter a new note</h4>

        {/* Note Input */}
        <NoteInput addNote={addNote}/>
      </section>

      <section>
        <h4>My Notes</h4>
        <p>Notes help to capture and organize important information, ideas, and reminders for easy access and future reference.</p>
        
        {/* Note List */}
        <NoteList
          notesData={notesData}
          onChangeStatus = {onChangeStatus}
          onDelete = {onDelete}
        />
        
      </section>

      <footer style={{fontSize:12}}>
        <p>
          <i>Midterm Exam {currentDate}</i>
          <br />
          <i>Diego Pinlac II</i>
        </p>
      </footer>
    </div>
  );
}

export default App;

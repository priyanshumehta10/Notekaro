import React, { useState,useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';


const AddNote = () => {
  const context = useContext(NoteContext);
  const {addNote} = context;

  const [note, setNote] = useState({title: "", description: "", tag: ""})
  const handleClick = (e)=>{
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""})
}

const onChange = (e)=>{
    setNote({...note, [e.target.name]: e.target.value})
}

  return (
    <div className='container mt-1'>
      <h2 className='text-center'>Add Notes</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Note Title</label>
          <input type="text"  id="title" name="title" value={note.title} onChange={onChange} minLength={5} required    className="form-control border border-success" />
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Note Description</label>
          <input type="text"  id="description" name="description" value={note.description} onChange={onChange} minLength={5} required    className="form-control border border-success" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Note Tag</label>
          <input type="text" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required  className="form-control border border-success"  />
        </div>
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-sm btn-success" onClick={handleClick}>Add Note</button>

      </form>
    </div>
  )
}

export default AddNote

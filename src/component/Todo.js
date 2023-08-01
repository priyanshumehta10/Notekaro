import React,{useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';

const Todo = (props) => {

  const context = useContext(NoteContext);
  const {deleteNote} = context;
  const {note,updateNote}=props
  return (
    <>
    <div className='card container mb-2 bg-info bg-opacity-10 border border-info rounded-end img'  >
      <div className="card-body">

        <h4 className="card-title">{note.title}</h4>
        <p className="card-text">{note.description}</p>
        <h5 className="card-text ">{note.tag}</h5>
        <button type="button" className="btn-sm btn btn-danger " onClick={()=>{deleteNote(note._id)}} >Delete <i className="fa-solid fa-delete-left fa-bounce"></i></button>
        <button type="button" className="btn-sm btn btn-success mx-2" onClick={updateNote}>Edit <i className="fa-solid fa-file-pen fa-bounce" ></i></button>

      </div>
    </div>

    </>
  )
}

export default Todo

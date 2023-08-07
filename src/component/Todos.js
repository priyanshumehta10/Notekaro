import React, { useContext, useEffect, useRef, useState } from "react";
import Todo from "./Todo";
import NoteContext from '../context/notes/NoteContext';
import {useNavigate} from 'react-router-dom';


const Todos = (props) => {
  const context = useContext(NoteContext);
  const { notes, getNotes,editNote  } = context;
  let navigate = useNavigate()
  const {showAlert} = props;
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: ""
  });

  const handleClick = () => {
    ref.current.click();
    editNote(note.id, note.etitle, note.edescription, note.etag);
  };

  useEffect(() => {
    if(localStorage.getItem("token")){

      getNotes();
    }else{
      navigate('/home')
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id, 
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag
    });
  };

  const onChange = (e) => {
    setNote((prevNote) => ({
      ...prevNote,
      [e.target.name]: e.target.value,
    }));
  };

  // Check if the note state is null or empty
  if (!note) {
    return null; // Or a loading indicator or any other fallback UI
  }
  return (
    <>

      {/* //modal */}
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">Note Title</label>
                  <input
                    type="text"
                    className="border border-success form-control"
                    value={note.etitle}
                    onChange={onChange}
                    name="etitle"
                    id="etitle"
                    aria-describedby="emailHelp"
                    required
                    minLength={5}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Note Description</label>
                  <input
                    type="text"
                    value={note.edescription}
                    onChange={onChange}
                    name="edescription"
                    className="form-control border border-success"
                    id="edescription"
                    required
                    minLength={5}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Note Tag</label>
                  <input
                    type="text"
                    value={note.etag}
                    onChange={onChange}
                    name="etag"
                    className="form-control border border-success"
                    id="etag"
                  />
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-sm btn-success" onClick={handleClick} >Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-center shad">TODO LIST</h3>
      <div className="mb-5 pb-3">
        {notes.length === 0 ? (
          <img
            className="text-center"
            style={{
              width: "100%",
              height: "auto",
            }}
            src="https://img.freepik.com/premium-vector/nothing-here-flat-illustration_418302-77.jpg"
            alt="No Notes Here"
          />
          ) : (
            notes.map((note) => {
              return (
               
                <Todo note={note} showAlert={showAlert} updateNote={() => updateNote(note)} key={note._id} /> 
                
              );
            })
          )}
        </div>
      </>
    );
  };
  
  export default Todos;
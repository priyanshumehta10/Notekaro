import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://127.0.0.1:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)
 


   // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiY2NmMzk2MGY4YTQ5Mjg2NzY1MWRmIn0sImlhdCI6MTY5MDA5NTQxN30.aB9KaMUubxlXsESg7I3qgn-SyQ3FcBCp3dGwOrY-SsY"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

 
    // Add a Note
    const addNote = async (title, description, tag) => {
      // TODO: API Call
      // API Call 
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiY2NmMzk2MGY4YTQ5Mjg2NzY1MWRmIn0sImlhdCI6MTY5MDA5NTQxN30.aB9KaMUubxlXsESg7I3qgn-SyQ3FcBCp3dGwOrY-SsY"
        },
        body: JSON.stringify({title, description, tag})
      });
      const json = await response.json();
    console.log(json)


    console.log("Adding a new note")
  
    //Client site code
     const note = {
      "_id": "61322f119553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a0664",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }



  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //TODO:API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiY2NmMzk2MGY4YTQ5Mjg2NzY1MWRmIn0sImlhdCI6MTY5MDA5NTQxN30.aB9KaMUubxlXsESg7I3qgn-SyQ3FcBCp3dGwOrY-SsY"
      },
      body: JSON.stringify({ id, title, description, tag }) // Pass an object with the required fields
    });
    const json = response.json();
    console.log(json);
    //logic for client
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  };


  //delete a note
  const deleteNote =async (id) => {
    console.log("deleting the note " + id)
    //TODO:API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiY2NmMzk2MGY4YTQ5Mjg2NzY1MWRmIn0sImlhdCI6MTY5MDA5NTQxN30.aB9KaMUubxlXsESg7I3qgn-SyQ3FcBCp3dGwOrY-SsY"
      }
    });
    const json = response.json();
    console.log(json)



    // client site
    const newNotes = notes.filter((note) => note._id !== id)
    setNotes(newNotes)
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, editNote, deleteNote,getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;

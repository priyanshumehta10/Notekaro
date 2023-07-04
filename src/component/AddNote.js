import React, { useState } from 'react'

const AddNote = (props) => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Please enter a title or description")
    }
    else {

      props.addTodo(title, desc)
    }
    setTitle("");
    setDesc("");
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Add Notes</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Note Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => { setTitle(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Note Description</label>
          <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-sm btn-success">Add Notes</button>
      </form>
    </div>
  )
}

export default AddNote

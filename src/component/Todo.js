import React from 'react'

const Todo = ({ todo, onDelete }) => {
  return (
    <>
     
    <div className='card container mb-2'  >
      <div className="card-body">

        <h4>{todo.sno}.</h4><h4 className="card-title">{todo.title}</h4>
        <p className="card-text">{todo.desc}</p>
        <button type="button" className="btn-sm btn btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>

      </div>
    </div>

    </>
  )
}

export default Todo

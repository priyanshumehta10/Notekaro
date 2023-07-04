import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <>
      <h3 className='text-center'>TODO LIST</h3>
      <div className='mb-5 pb-3'>
        {props.todos.length === 0 ?
          <img className='text-center' src="https://img.freepik.com/premium-vector/nothing-here-flat-illustration_418302-77.jpg" alt="No Notes Here" /> :
          props.todos.map((todo) => {
            return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
          })
        }
      </div>
    </>
  )
}

export default Todos

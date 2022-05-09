import React, { useState } from 'react'

const TodoList = () => {
  // set state variables
  const [todoTitle, setTodoTitle] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)

  // create an array in state that holds each object
  let [todoListings, setTodoListings] = useState([])

  // create a submit handler
  const submitTodo = e => {
    // prevent default behavior from refreshing the page
    e.preventDefault()
    console.log('submitted todo')

    // create a new object for each of the todos
    let newTodo = {
      todoTitle,
      isCompleted
    }
    console.log('newTodo', newTodo)
    // push the newTodo object into the todoListings array
    setTodoListings([...todoListings, newTodo])

    // clear the input field
    setTodoTitle('')
  }
  // function to change the state of the isCompleted property from false to true
  const toggleTodoCompletion = (e, index) => {
    let [...copyTodoListings] = todoListings
    copyTodoListings[index].isCompleted = !copyTodoListings[index].isCompleted
    setTodoListings(copyTodoListings)
  }

  // function to delete a todo
  const deleteTodo = (e, index) => {
    let filteredCopy = todoListings.filter((todo, i) => {
      return i !== index
    })
    setTodoListings(filteredCopy)
  }

  return (
    <>
      <div className='container w-50 text-start border border-warning p-3'>
        <form onSubmit={submitTodo}>
          {/* todoTitle */}
          <div className='form-group'>
            <label className='h4' htmlFor=''>
              Todo:
            </label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter
                todo'
              onChange={e => setTodoTitle(e.target.value)}
              value={todoTitle}
            />
          </div>
          {/* submit button */}
          <div className='form-group text-start mt-3'>
            <input
              className='btn btn-warning'
              type='submit'
              value='Add A Todo'
            />
          </div>
        </form>
      </div>
      <br />
      <div className='container align-items-center'>
        <ul className='list-group"'>
          {todoListings.map((todo, index) => (
            <li
              className='list-group-item'
              key={index}
              style={{
                textDecoration: todo.isCompleted ? 'line-through' : 'none'
              }}
            >
              <label class='container'>
                <h3
                  className=''
                  style={{
                    textDecoration: todo.isCompleted
                      ? 'line-through' // can use multiple eg: underline overline line-through
                      : null,
                    color: todo.isCompleted ? 'gold' : null
                    // backgroundColor: todo.isCompleted ? 'blue' : null
                  }}
                >
                  {todo.todoTitle}
                  {todo.isCompleted ? (
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='40'
                        height='40'
                        fill='currentColor'
                        class='bi bi-check-lg'
                        viewBox='0 0 16 16'
                      >
                        <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z' />
                      </svg>
                    </span>
                  ) : null}
                </h3>
                <input
                  class='form-check-input me-1'
                  type='checkbox'
                  onClick={e => toggleTodoCompletion(e, index)}
                />
                {todo.isCompleted ? 'Completed' : 'Complete'}
              </label>
              {/* delete button */}
              <button
                className='btn-sm btn-danger mt-3'
                // callback function with extra args to pass the index of the todo to be deleted along with the event
                onClick={e => deleteTodo(e, index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default TodoList

import React from 'react'
import { FaChevronCircleDown, FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const handleComplete = todo =>
    setTodos(
      todos.map(item => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    )
  const handleDelete = ({ id }) =>
    setTodos(todos.filter(todo => todo.id !== id))
  const handleEdit = ({ id }) => {
    const findTodo = todos.find(todo => todo.id === id)
    setEditTodo(findTodo)
  }
  return (
    <div>
      {todos.map(todo => (
        <li className='list-item' key={todo.id}>
          <input
            type='text'
            value={todo.title}
            className={'list ' + (todo.completed ? 'complete' : '')}
            onChange={event => event.preventDefault()}
          />
          <div>
            <button
              className='button-complete task-button'
              onClick={() => handleComplete(todo)}
            >
              <FaChevronCircleDown />
            </button>
            <button
              className='button-edit task-button'
              onClick={() => handleEdit(todo)}
            >
              <FaPencilAlt />
            </button>
            <button
              className='button-delete task-button'
              onClick={() => handleDelete(todo)}
            >
              <FaTrashAlt />
            </button>
          </div>
        </li>
      ))}
    </div>
  )
}

export default TodosList

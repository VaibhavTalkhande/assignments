import { useState ,useEffect} from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const editTodo = (index) => {
    setEdit(true);
    setEditIndex(index);
  };
  const updateTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index] = todo;
    setTodos(newTodos);
    setEdit(false);
    setEditIndex(null);
  }
  const getTodo = () => {
    const todos = localStorage.getItem('todos')
    if (todos) {
      setTodos(JSON.parse(todos))
    }
  }
  useEffect(() => {
    const storeTodo = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
    storeTodo()
  }, [todos])
  useEffect(() => {
    getTodo()
  }, [])

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo (e.target.value)}
      />
      <button
        onClick={() => {
          setTodos([...todos, todo])
          setTodo('')
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {edit && editIndex === index ? (
              <input
                type="text"
                value={todo}
                onChange={(e) => setTodo (e.target.value)}
              />
            ) : (
              todo
            )}
            {edit && editIndex === index ? (
              <button onClick={() => updateTodo (index)}>Update</button>
            ) : (
              <button onClick={() => editTodo (index)}>Edit</button>
            )}
            <button
              onClick={() => {
                const newTodos = todos.filter((_, i) => i !== index)
                setTodos(newTodos)
              }}
            >
              Delete
            </button>
          </li>
          
        ))}
      </ul>


    </>
  )
}

export default App

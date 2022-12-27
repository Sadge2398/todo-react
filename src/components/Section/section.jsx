import './section.css'
import { useState } from 'react'

export default function Section() {

const [todo, setTodo] = useState('')    
const [todos, setTodos] = useState([])
const [edit, setEdit] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()

    if (edit) {
       const editTodo = todos.find((i) => i.id === edit)
       const updatedTodos = todos.map((a) =>
        a.id === editTodo.id 
        ? (a = {id: a.id, todo}) 
        : {id: a.id, todo: a.todo}
        )
        setTodos(updatedTodos)
        setEdit(null)
        setTodo('')
        return
    }
    
    if(todo === '') {
        alert('Write Somthing')
    } else {
        setTodos([{id:`${todo}-${Date.now()}` ,todo }, ...todos])
        setTodo('')
        console.log(todos)
    }}

    const handleEdit = (id) => {
        setTodo(todos.find((i) => i.id === id).todo)
        setEdit(id)
    }

    const onClick = () => {
        
    }
    
    const handleDelete = (id) => {
        setTodos(todos.filter((s) => s.id !== id))
        
    }
    return (<>
        <div className="header">
            <div className="center">
                <h2 className="title">To Do List ...</h2>
              <form action="#" id="todo-form" method="get" name="validation"onSubmit={handleSubmit}>
                <div className="label">
                
                   <input id='data' value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder='Get Shit Done!'/>
                
                    <button className={edit? 'add-edit' : 'add'} id="btn" type="submit" onClick={onClick}></button>
                </div>
            </form>
            <ol className="list" id="todoList">
                {
                    todos.map((item) => (
                    <li key={item.id}>{item.todo}
                    <button className='remove' onClick={() => handleDelete(item.id)}>Remove</button>
                    <button className='edit' onClick={() => handleEdit(item.id)}>edit</button>
                    <hr />
                    </li>
                    ))
                }
            </ol>
        </div>
    </div>
    </>)
}
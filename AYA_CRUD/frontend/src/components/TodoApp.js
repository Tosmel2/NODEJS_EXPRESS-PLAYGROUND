import '../App.css';
import React, { useState } from 'react'
// import uuid from 'uuid'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
// import Navbar from './components/Navbar';


// import { v1 as uuidv1 } from 'uuid';

// uuidv1();

const TodoApp = () => {
const [ items, setItems ] = useState([])
const [ itemsToShow, setItemsToShow ] = useState("all")
// const [ id, setId ] = useState(uuidv1())
const [ item, setItem ] = useState('')
// const [ editItem, setEditItem ] = useState(false)

const handleChange = event => {
	setItem(event.target.value)
}

const handleSubmit = event => {
	event.preventDefault()

	const newItem = {
		// id: id,
		title: item,
		completed: false
	}

	const updatedItems = [...items, newItem]

	if (item.length > 0) {
		setItems(updatedItems)
		// setId(uuid())
		setItem('')
		// setEditItem(false)
	}
}

const updateTodosToShow = string => {
	setItemsToShow(string)
};

const handleDoneTask = (id, completed) => {
	const filteredItems = items.map(item => {
		item.id === id && (item.completed = !item.completed)
		return item
	})

	setItems(filteredItems)
}

const handleDelete = id => {
	const filteredItems = items.filter(item => item.id !== id)

	setItems(filteredItems)
}

const handleEdit = id => {
	const filteredItems = items.filter(item => item.id !== id)

	const selectedItem = items.find(item => item.id === id)

	setItems(filteredItems)
	// setId(id)
	setItem(selectedItem.title)
	// setEditItem(true)
}

const handleDeleteDoneTasks = () => {
	const filteredItems = items.filter(item => item.completed === false)

	setItems(filteredItems)
}

const clearList = () => {
	setItems([])
}

let todoItems = []

if (itemsToShow === "all") {
	todoItems = items
} else if (itemsToShow === "todo") {
	todoItems = items.filter(item => !item.completed)
} else if (itemsToShow === "done") {
	todoItems = items.filter(item => item.completed)			
}

return (
	<>
	{/* <Navbar /> */}
	<div className="container">
		<div className="row">
			<div className="col-10 col-md-8 mx-auto mt-4">
				<h3 className="text-capitalize text-center">TodoInput</h3>
        <TodoInput
         item={item}
         handleChange={handleChange}
         handleSubmit={handleSubmit}
       />

        <TodoList
                items={todoItems}
                updateTodosToShow={updateTodosToShow}
                handleDoneTask={handleDoneTask}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                clearList={clearList}
                handleDeleteDoneTasks={handleDeleteDoneTasks}
              />
        </div>
      </div>
    </div>
		</>
  )
  }

export default TodoApp;
  




// function App() {
//   return (
//     <div className="App">
//       THE AYA CRUD TASK FRONTENT APP HERE
//     </div>
//   );
// }

// export default App;



import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Register />}/>
						<Route path="/login" element={<Login />}/>
            <Route path="/tasks" element={<TodoApp />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { ToDoList } from './ToDoList'; 
import imageOne from './toDo.jpg';
import imageTwo from './done.jpg';

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={imageOne} alt="To do list" width="200px"/>
      </div>
      <div className="container">
        <h1>Список дел</h1>
      </div>
      <ToDoList/>
      <div className="container">
        <img src={imageTwo} width="200px" alt="Done"/>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Addtodo from './components/Addtodo';
import Todolist from './components/Todolist';


function App() {
  return (
    <div className="App">
     <h1>React-redux toolkit</h1>
     <Addtodo/>
     <Todolist/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';


function App() {
  return (
    <div className="App">
      <div className='App-header'>
     <AddTodo />
     <Todos />
     </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import FileExplorar from './components/FileExplorar';

// import { FileExplorerObj } from './Constant'
import { FileExplorerObj } from './components/Constant';
function App() {
  return (
    <div className="App">
     React Task
     <FileExplorar />
    </div>
  );
}

export default App;

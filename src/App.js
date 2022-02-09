import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TopBar from './Component/TopBar';
import Mid from './Component/Mid';
import Stores from './Component/Stores';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Mid />
      <Stores />
    </div>
  );
}

export default App;
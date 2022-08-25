import './App.css';
import { DescriptionsContainer } from './components/Description/Descriptions';
import { List } from './components/List/List';

function App() {
  return (
      <div className="App">
          <List/>
          <div></div>
          <DescriptionsContainer/>
    </div>
  );
}

export default App;

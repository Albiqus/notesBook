import './App.css';
import { Decoration } from './components/Decoration/Decoration';
import { DescriptionsContainer } from './components/Description/Descriptions';
import { ModalContainer } from './components/Modal/Modal';
import { TasksContainer } from './components/Tasks/Tasks';

function App() {
  return (
      <div className="App">
              <ModalContainer/>
          <div className="main-content">
              <TasksContainer />
              <Decoration/>
              <DescriptionsContainer />
         </div>
      </div>
  );
}

export default App;

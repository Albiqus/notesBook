import './App.css';
import { AddTaskModalContainer } from './components/Modals/AddTaskModal/AddTaskModalContainer';
import { Decoration } from './components/Decoration/Decoration';
import { DescriptionsContainer } from './components/Description/Descriptions';
import { TasksContainer } from './components/Tasks/Tasks';
import { RemoveTaskModalContainer } from './components/Modals/RemoveTaskModal/RemoveTaskModalContainer';
import { EditTaskModalContainer } from './components/Modals/EditTaskModal/EditTaskModalContainer';


function App() {
  return (
      <div className="App">
              <AddTaskModalContainer />
              <EditTaskModalContainer />
              <RemoveTaskModalContainer/>
          <div className="main-content">
              <TasksContainer/>
              <Decoration/>
              <DescriptionsContainer/>
          </div>
      </div>
  );
}

export default App;

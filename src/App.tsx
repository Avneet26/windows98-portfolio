import './App.css'
import MainScreen from "./components/MainScreen.tsx";
import TaskbarContainer from "./components/TaskbarContainer.tsx";

function App() {
  return (
    <div className="main-container d-flex flex-column">
        <MainScreen />
        <TaskbarContainer />
    </div>
  )
}

export default App

import './App.css'
import MainScreen from "./components/MainScreen.tsx";
import TaskbarContainer from "./components/TaskbarContainer.tsx";
import {WindowManagerProvider} from "./context/WindowsManager.tsx";

function App() {
  return (
    <div className="main-container d-flex flex-column">
        <WindowManagerProvider>
            <MainScreen />
            <TaskbarContainer />
        </WindowManagerProvider>
    </div>
  )
}

export default App

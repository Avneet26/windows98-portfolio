import WindowsButton from "./WindowsButton..tsx";
import {useWindowManager} from "../context/WindowsManager.tsx";

import windowsIcon from "../assets/png/windows-0.png";

export default function TaskbarContainer() {
    
    const {openWindows} = useWindowManager();
    
    return (
        <div className="w-100 task-bar-container windows-border d-flex align-items-center">
            <WindowsButton name={"Start"} imgSrc={windowsIcon} fullBtn={true} />
            <div className="divider"></div>
            {openWindows.map((window) => (
                <WindowsButton name={window.name} key={window.name} imgSrc={window.image} fullBtn={true}/>
            ))}
        </div>
    )
}
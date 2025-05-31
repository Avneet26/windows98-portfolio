import DesktopIcons from "./DesktopIcons.tsx";
// import NewWindow from './NewWindow';

import computerIcon from "../assets/png/computer_explorer-2.png";
import aboutIcon from "../assets/png/directory_open_file_mydocs_2k-2.png";
import cmdIcon from "../assets/png/console_prompt-0.png";
import notepadIcon from "../assets/png/notepad-1.png";
import projectIcon from "../assets/png/package-1.png";
import {Rnd} from "react-rnd";
import NewWindow from "./NewWindow.tsx";
import {useWindowManager} from "../context/WindowsManager.tsx";

export default function MainScreen() {
    const desktopIcons = [
        { name: "My Computer", icon: computerIcon },
        { name: "About Me", icon: aboutIcon },
        { name: "My Hobby Projects", icon: projectIcon },
        { name: "My Experience", icon: notepadIcon },
        { name: "Command Prompt", icon: cmdIcon },
    ];

    const { openWindows } = useWindowManager();

    return (
        <div className="main-screen-container w-100 position-relative">
            {desktopIcons.map((icon, index) => (
                <DesktopIcons name={icon.name} image={icon.icon} key={index} tabindex={index} />
            ))}

            {
                openWindows.map((openWindow) => (
                    <Rnd
                        default={{
                            x: openWindow.x,
                            y: openWindow.y,
                            width: openWindow.width,
                            height: openWindow.height,
                        }}
                        dragHandleClassName={"window-title-bar-container"}
                        style={{background: "white"}}
                        bounds={"window"}
                        minHeight={350}
                        minWidth={350}
                        key={openWindow.name}
                    >
                        <NewWindow title={openWindow.name} id={openWindow.name}/>
                    </Rnd>
                ))
            }

        </div>
    );
}

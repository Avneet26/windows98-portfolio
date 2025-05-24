import DesktopIcons from "./DesktopIcons.tsx";
// import NewWindow from './NewWindow';

import computerIcon from "../assets/png/computer_explorer-2.png";
import aboutIcon from "../assets/png/directory_open_file_mydocs_2k-2.png";
import cmdIcon from "../assets/png/console_prompt-0.png";
import notepadIcon from "../assets/png/notepad-1.png";
import projectIcon from "../assets/png/package-1.png";

export default function MainScreen() {
    const desktopIcons = [
        { name: "My Computer", icon: computerIcon },
        { name: "About Me", icon: aboutIcon },
        { name: "My Hobby Projects", icon: projectIcon },
        { name: "My Experience", icon: notepadIcon },
        { name: "Command Prompt", icon: cmdIcon },
    ];

    return (
        <div className="main-screen-container w-100 position-relative">
            {desktopIcons.map((icon, index) => (
                <DesktopIcons name={icon.name} image={icon.icon} key={index} tabindex={index} />
            ))}
            {/*<div className="draggable-window position-absolute" style={{ top: 200, left: 200, zIndex: 10 }}>*/}
            {/*    <NewWindow title="My Computer" />*/}
            {/*</div>*/}
        </div>
    );
}

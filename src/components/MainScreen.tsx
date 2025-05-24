import DesktopIcons from "./DesktopIcons.tsx";

import computerIcon from "../assets/png/computer_explorer-2.png";
import aboutIcon from "../assets/png/directory_open_file_mydocs_2k-2.png";
import cmdIcon from "../assets/png/console_prompt-0.png";

export default function MainScreen() {
    const desktopIcons = [
        { name: "My Computer", icon: computerIcon },
        { name: "About Me", icon: aboutIcon },
        { name: "Command Prompt", icon: cmdIcon },
    ];

    return (
        <div className="main-screen-container w-100 position-relative">
            {desktopIcons.map((icon, index) => (
                <DesktopIcons name={icon.name} image={icon.icon} key={index} tabindex={index} />
            ))}
        </div>
    );
}

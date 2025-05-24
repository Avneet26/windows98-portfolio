import DesktopIcons from "./DesktopIcons.tsx";

export default function MainScreen() {

    const desktopIcons = [
        {name: "My Computer", icon: "src/assets/png/computer_explorer-2.png"},
        {name: "About Me", icon: "src/assets/png/directory_open_file_mydocs_2k-2.png"},
        {name: "Command Prompt", icon: "src/assets/png/console_prompt-0.png"},
    ]

    return (
        <div className="main-screen-container w-100 position-relative">
            {desktopIcons.map((icon, index) => (
                <DesktopIcons name={icon.name} image={icon.icon} key={index} tabindex={index}/>
            ))}
        </div>
    )
}
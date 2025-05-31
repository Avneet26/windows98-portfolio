import DesktopIcons from "./DesktopIcons.tsx";
// import NewWindow from './NewWindow';

import computerIcon from "../assets/png/computer_explorer-2.png";
import aboutIcon from "../assets/png/directory_open_file_mydocs_2k-2.png";
import cmdIcon from "../assets/png/console_prompt-0.png";
import notepadIcon from "../assets/png/notepad-1.png";
import projectIcon from "../assets/png/package-1.png";
import {type DraggableData, type Position, type ResizableDelta, Rnd} from "react-rnd";
import NewWindow from "./NewWindow.tsx";
import {useWindowManager, type WindowInstance} from "../context/WindowsManager.tsx";

export default function MainScreen() {
    const desktopIcons = [
        { name: "My Computer", icon: computerIcon },
        { name: "About Me", icon: aboutIcon },
        { name: "My Hobby Projects", icon: projectIcon },
        { name: "My Experience", icon: notepadIcon },
        { name: "Command Prompt", icon: cmdIcon },
    ];

    const { openWindows, handlePositionChange } = useWindowManager();

    const MaxWindows:WindowInstance[] = openWindows.filter((x) => !x.isMinimized);

    const handleChange = (
        name: string,
        _e: MouseEvent | TouchEvent,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        _dir: ResizeDirection,
        _refToElement: HTMLElement,
        delta: ResizableDelta,
        position: Position
    ) => {
        console.log("Resizing:", name, delta, position);
        handlePositionChange(name, position.x, position.y, delta.width, delta.height);
    };

    const handleDrag = (
        name: string,
        _e: unknown,
        data: DraggableData
    ) => {
        const { x, y } = data;
        console.log("Dragging:", name, x, y);

        // Call your existing state update logic
        handlePositionChange(name, x, y, 0, 0); // width & height unchanged
    };

    return (
        <div className="main-screen-container w-100 position-relative">
            {desktopIcons.map((icon, index) => (
                <DesktopIcons name={icon.name} image={icon.icon} key={index} tabindex={index} />
            ))}

            {
                MaxWindows.map((openWindow) => (
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
                        onResizeStop={(e, dir, refToElement, delta, position) =>
                            handleChange(openWindow.name, e, dir, refToElement, delta, position)
                        }
                        onDragStop={(e, data) =>
                            handleDrag(openWindow.name, e, data)
                        }
                    >
                        <NewWindow title={openWindow.name} id={openWindow.name}/>
                    </Rnd>
                ))
            }

        </div>
    );
}

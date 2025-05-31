import WindowsButton from "./WindowsButton..tsx";

import crossIcon from "../assets/Cross.png";
import maximiseIcon from "../assets/pixel_art (2).png";
import minimiseIcon from "../assets/Minimize.png";
import {useWindowManager} from "../context/WindowsManager.tsx";

type PropType = {
    title: string;
    id: string;
};

export default function NewWindow({ title, id }: PropType) {

    const {closeWindow} = useWindowManager();

    return (
        <div className="window windows-border h-100" data-id={id}>
            <div className="window-title-bar-container">
                <div className="window-title-bar d-flex justify-content-between align-items-center">
                    {title}
                    <div className="window-title-buttons d-flex align-items-center gap-1">
                        <WindowsButton name={"minimise"} imgSrc={minimiseIcon} />
                        <WindowsButton name={"maximise"} imgSrc={maximiseIcon} />
                        <WindowsButton name={"cross"} imgSrc={crossIcon} handleClick={() => {closeWindow(id)}} />
                    </div>
                </div>
            </div>
            <div className="window-content p-3">
                <p>This is the content of the window.</p>
            </div>
        </div>
    );
}

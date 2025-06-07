import WindowsButton from "./WindowsButton..tsx";

import crossIcon from "../assets/Cross.png";
import maximiseIcon from "../assets/pixel_art (2).png";
import minimiseIcon from "../assets/Minimize.png";
import {useWindowManager} from "../context/WindowsManager.tsx";
import AboutMe from "./AboutMe.tsx";

type PropType = {
    title: string;
    id: string;
};

export default function NewWindow({ title, id }: PropType) {

    const {closeWindow, minimizedWindow} = useWindowManager();

    const renderWindowContent = (title: string) => {
        switch (title) {
            case "About Me":
                return <AboutMe />;
            default:
                return <p>Content is in work</p>;
        }
    };

    return (
        <div className="window windows-border h-100 d-flex flex-column" data-id={id}>
            <div className="window-title-bar-container">
                <div className="window-title-bar d-flex justify-content-between align-items-center">
                    {title}
                    <div className="window-title-buttons d-flex align-items-center gap-1">
                        <WindowsButton name={"minimise"} imgSrc={minimiseIcon} handleClick={() => {minimizedWindow(id)}}/>
                        <WindowsButton name={"maximise"} imgSrc={maximiseIcon} />
                        <WindowsButton name={"cross"} imgSrc={crossIcon} handleClick={() => {closeWindow(id)}} />
                    </div>
                </div>
            </div>
            <div className="window-content m-2 windows-border">
                <div className="p-3">
                    {renderWindowContent(title)}
                </div>
            </div>
        </div>
    );
}

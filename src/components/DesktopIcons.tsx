import React, { useState } from "react";
import { useDraggable } from "../scripts/useDraggable";
import {useWindowManager} from "../context/WindowsManager.tsx";

type DesktopIconProps = {
    name: string;
    image: string;
    tabindex: number;
};

export default function DesktopIcon({name, image, tabindex}: DesktopIconProps) {
    const [lastTapTime, setLastTapTime] = useState(0);
    const { position, isDragging, handleMouseDown, handleTouchStart } = useDraggable(5, tabindex * 94 + 20);
    const {openWindow} = useWindowManager();

    const handleDoubleClick = () => {
        openWindow(name, image);
    };

    const wrappedTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        handleTouchStart(e);
        const now = Date.now();
        if (now - lastTapTime < 300) {
            handleDoubleClick();
        }
        setLastTapTime(now);
    };

    return (
        <div
            tabIndex={tabindex}
            className={`desktop-icon d-flex flex-column align-items-center justify-content-between position-absolute ${
                isDragging ? "dragging" : ""
            }`}
            style={{
                top: `${position.y}px`,
                left: `${position.x}px`,
                touchAction: "none",
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={wrappedTouchStart}
            onDoubleClick={handleDoubleClick}
        >
            <div className="icon-img-wrapper position-relative">
                <img
                    src={image}
                    alt={name}
                    width={32}
                    height={32}
                    className="icon-img"
                    draggable={false}
                />
            </div>
            <p className="mt-1 px-1">{name}</p>
        </div>
    );
}

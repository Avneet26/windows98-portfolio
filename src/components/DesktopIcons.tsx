import React, { useEffect, useState } from "react";

type DesktopIconProps = {
    name: string;
    image: string;
    tabindex: number;
    onDoubleClick?: () => void;
};

const GRID_SIZE = 94; // for optional snap-to-grid

export default function DesktopIcon({name, image, tabindex, onDoubleClick,}: DesktopIconProps) {
    const initTop = tabindex * 94 + 20;
    const initLeft = 5;

    const [top, setTop] = useState(initTop);
    const [left, setLeft] = useState(initLeft);
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (startPos && !isDragging) {
                const dx = Math.abs(event.clientX - startPos.x);
                const dy = Math.abs(event.clientY - startPos.y);

                if (dx > 5 || dy > 5) {
                    setIsDragging(true);
                }
            }

            if (isDragging) {
                setTop(event.clientY - dragOffset.y);
                setLeft(event.clientX - dragOffset.x);
            }
        };

        const handleMouseUp = () => {
            if (isDragging) {
                // Snap to grid (optional)
                setTop(prev => (Math.round(prev / GRID_SIZE) * GRID_SIZE) + 20);
                setLeft(prev => (Math.round(prev / GRID_SIZE) * GRID_SIZE) + 5);
            }

            setIsDragging(false);
            setStartPos(null);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging, startPos, dragOffset]);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        setStartPos({ x: event.clientX, y: event.clientY });
        setDragOffset({ x: offsetX, y: offsetY });
    };

    const handleDoubleClick = () => {
        if (onDoubleClick) {
            onDoubleClick();
        } else {
            console.log(`"${name}" opened!`);
        }
    };

    return (
        <div
            tabIndex={tabindex}
            className={`desktop-icon d-flex flex-column align-items-center justify-content-between position-absolute ${
                isDragging ? "dragging" : ""
            }`}
            style={{ top: `${top}px`, left: `${left}px` }}
            onMouseDown={handleMouseDown}
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

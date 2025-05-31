import { useEffect, useState } from "react";

const GRID_SIZE = 94;

export interface Position {
    x: number;
    y: number;
}

export function useDraggable(initialX: number, initialY: number) {
    const [position, setPosition] = useState<Position>({ x: initialX, y: initialY });
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState<Position | null>(null);
    const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent | TouchEvent) => {
            let clientX: number, clientY: number;

            if ("touches" in event) {
                if (event.touches.length === 0) return;
                clientX = event.touches[0].clientX;
                clientY = event.touches[0].clientY;
            } else {
                clientX = event.clientX;
                clientY = event.clientY;
            }

            if (startPos && !isDragging) {
                const dx = Math.abs(clientX - startPos.x);
                const dy = Math.abs(clientY - startPos.y);
                if (dx > 5 || dy > 5) {
                    setIsDragging(true);
                }
            }

            if (isDragging) {
                setPosition({ x: clientX - dragOffset.x, y: clientY - dragOffset.y });
            }
        };

        const handleMouseUp = () => {
            if (isDragging) {
                setPosition((prev) => ({
                    x: Math.round(prev.x / GRID_SIZE) * GRID_SIZE + 5,
                    y: Math.round(prev.y / GRID_SIZE) * GRID_SIZE + 20,
                }));
            }

            setIsDragging(false);
            setStartPos(null);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("touchmove", handleMouseMove, { passive: false });
        window.addEventListener("touchend", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchmove", handleMouseMove);
            window.removeEventListener("touchend", handleMouseUp);
        };
    }, [isDragging, startPos, dragOffset]);

    const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setStartPos({ x: e.clientX, y: e.clientY });
        setDragOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
        const touch = e.touches[0];
        const rect = e.currentTarget.getBoundingClientRect();
        setStartPos({ x: touch.clientX, y: touch.clientY });
        setDragOffset({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
    };

    return {
        position,
        isDragging,
        handleMouseDown,
        handleTouchStart,
    };
}

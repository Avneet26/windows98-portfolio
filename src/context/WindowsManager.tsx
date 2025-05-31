import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export interface WindowInstance {
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    isMinimized: boolean;
    image: string;
}

interface WindowManagerContextProps {
    openWindows: WindowInstance[];
    openWindow: (name: string, image:string) => void;
    closeWindow: (id: string) => void;
}

const WindowManagerContext = createContext<WindowManagerContextProps | undefined>(undefined);

export const useWindowManager = (): WindowManagerContextProps => {
    const context = useContext(WindowManagerContext);
    if (!context) throw new Error("useWindowManager must be used within WindowManagerProvider");
    return context;
};

interface WindowManagerProviderProps {
    children: ReactNode;
}

export const WindowManagerProvider: React.FC<WindowManagerProviderProps> = ({ children }) => {
    const [openWindows, setOpenWindows] = useState<WindowInstance[]>([]);

    const openWindow = (name: string, image: string) => {
        setOpenWindows([...openWindows, { x: 50, y: 100, width: 600, height: 500, name, isMinimized: false, image}]);
    };

    const closeWindow = (name: string) => {
        setOpenWindows((prev) => prev.filter((w) => w.name !== name));
    };

    return (
        <WindowManagerContext.Provider value={{ openWindows, openWindow, closeWindow }}>
            {children}
        </WindowManagerContext.Provider>
    );
};

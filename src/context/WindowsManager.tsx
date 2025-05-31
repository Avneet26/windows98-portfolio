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
    minimizedWindow: (name:string) => void;
    maximizedWindow: (name:string) => void;
    handlePositionChange: (name: string, x: number, y: number, widthChange: number, heightChange: number) => void
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
        let flag:boolean = false;

        for (const openWindowsKey in openWindows) {
            if (openWindows[openWindowsKey].name === name) {
                flag = true;
            }
        }
        if(!flag){
            setOpenWindows([...openWindows, { x: 50, y: 100, width: 600, height: 500, name, isMinimized: false, image}]);
        }
    };

    const minimizedWindow = (name: string) => {
        setOpenWindows((prev) => (
            prev.map(currWindow => (
                currWindow.name === name ? {...currWindow, isMinimized: true} : currWindow
            ))
        ));
    }

    const maximizedWindow = (name: string) => {
        setOpenWindows((prev) => (
            prev.map(currWindow => (
                currWindow.name === name ? {...currWindow, isMinimized: false} : currWindow
            ))
        ));
    }

    const closeWindow = (name: string) => {
        setOpenWindows((prev) => prev.filter((w) => w.name !== name));
    };

    const handlePositionChange = (name: string, x: number, y: number, widthChange: number, heightChange: number) => {
        setOpenWindows((prev) => (
            prev.map(currWindow => (
                currWindow.name === name
                    ?
                    {...currWindow,
                        x: x,
                        y: y,
                        height: currWindow.height+heightChange,
                        width: currWindow.width+widthChange
                    }
                    : currWindow
            ))
        ));
    }

    return (
        <WindowManagerContext.Provider value={
            { openWindows, openWindow, closeWindow, minimizedWindow, maximizedWindow, handlePositionChange }
        }>
            {children}
        </WindowManagerContext.Provider>
    );
};

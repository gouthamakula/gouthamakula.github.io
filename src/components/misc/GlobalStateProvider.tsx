import { createContext, useState } from "react";

interface CardIdxState {
    hoveredIdx: number;
    setHoveredIdx: (idx: number) => void;
}

export const GlobalStateContext = createContext<{
    cardIdx: CardIdxState,
} | null>(null);

export const GlobalStateProvider: React.FC<{children: React.ReactNode}> = ({
    children,
}) => {
    const [hoveredIdx, setHoveredIdx] = useState<number>(-1);

    return (<GlobalStateContext.Provider value={{ // add the initial states here...
        cardIdx: {
            hoveredIdx: hoveredIdx,
            setHoveredIdx: setHoveredIdx
        },
    }}>
        {children}
    </GlobalStateContext.Provider>);
};

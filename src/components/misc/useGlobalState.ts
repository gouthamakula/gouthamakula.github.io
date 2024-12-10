import { useContext } from "react";
import { GlobalStateContext } from "./GlobalStateProvider";


export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if(!context) {
        throw new Error("useGlobalState must be used within GlobalStateProvider");
    }
    return context;
}

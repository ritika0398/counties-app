import { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext";


export function useThemeHook() {

    return (useContext(themeContext))
}

//Optimize code
//export const useThemeHook = () => useContext(themeContext); 
import React, { useContext } from "react";

export const ThemeContext = React.createContext<boolean | undefined>(undefined);
export const ThemeUpdateContext = React.createContext<(() => void) | undefined>(undefined);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }
    return context;
}

export function useThemeUpdate() {
    const context = useContext(ThemeUpdateContext);
    if (context === undefined) {
        throw new Error("useThemeUpdate must be used inside ThemeProvider");
    }
    return context;
}
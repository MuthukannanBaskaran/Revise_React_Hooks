import React, { useState } from "react";
import { ThemeContext, ThemeUpdateContext } from "./ThemeContext";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [systemTheme, setSystemTheme] = useState(true);

    function toggleTheme() {
        setSystemTheme(prev => !prev);
    }

    return (
        <ThemeContext.Provider value={systemTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
}
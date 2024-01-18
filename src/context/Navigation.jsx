import { createContext, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    return (
        <NavigationContext.Provider value={{}}>
            {currentPath}
            {children}
        </NavigationContext.Provider>
    )
}

export default NavigationProvider;
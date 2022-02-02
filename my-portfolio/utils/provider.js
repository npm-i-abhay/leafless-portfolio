import { useContext, createContext, useState } from "react";
import { global_theme } from "./variables";


const initialStates = {
    theme:'default',
    setTheme: ()=>{}
}

const MyContext = createContext(initialStates)

export default function AppProvider ({children})
{
    const [theme,setTheme] = useState(initialStates.theme)
    
    return <MyContext.Provider value={{theme, setTheme}}>
        <style jsx global>{`
        
        body
        {
            background-color:${global_theme[theme].body};
        }
        
        `}

        </style>
        {children}
    </MyContext.Provider>

}

export function useTheme ()
{
    const {theme, setTheme} = useContext(MyContext)
    return {theme,setTheme}
}
import { createContext, useContext,useState } from "react";

const Menu=createContext();

const MenuProvider=({children})=>{
    const [menu,setMenu]=useState(false);
    return(
        <Menu.Provider value={{menu: menu, setMenu:setMenu}}>
            {children}
        </Menu.Provider>
    )
}

const useMenu=()=>useContext(Menu);

export {MenuProvider, useMenu}

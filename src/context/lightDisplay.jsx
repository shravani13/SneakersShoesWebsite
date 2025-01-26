import { useContext, createContext, useState } from "react";

const LightDisplay=createContext();

const LightDisplayProvider=({children})=>{
    const [lightDisplay, setLightDisplay]=useState(false);
    const [lightDisplayImage, setLightDisplayImage]=useState('');
    return(
        <LightDisplay.Provider value={{lightDisplay: lightDisplay, setLightDisplay: setLightDisplay, lightDisplayImage: lightDisplayImage,setLightDisplayImage: setLightDisplayImage}}>
            {children}
        </LightDisplay.Provider>
    )
}

const useLightDisplay=()=>useContext(LightDisplay);

export {useLightDisplay,LightDisplayProvider }
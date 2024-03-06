import { Breadbrum } from "../Components/AboutBread/Breadbrum";
import { loadScripts,unloadScripts } from "../Components/LoadScript"
import { useEffect } from "react";
import { PackagesContent } from "../Components/Packages/PackagesContent";
import { ScrollTop } from "../Components/ScrollTop";

export const EDOnlinePage=()=>{
    useEffect(() => {
        const scripts = loadScripts();
    
        window.addEventListener('popstate', () => {
          // Handle popstate event (user navigates back or forward)
          unloadScripts(scripts);
          loadScripts();
        });
    
        return () => {
          // Cleanup the scripts when the component unmounts
          unloadScripts(scripts);
          window.removeEventListener('popstate', () => {
            unloadScripts(scripts);
            loadScripts();
          });
        };
      }, []);
    return(
       <>
        <Breadbrum title="ED Online" />
        <PackagesContent/>
        <ScrollTop/>
       </>
    )
}
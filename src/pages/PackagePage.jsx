import { useEffect } from "react"
import { Breadbrum } from "../Components/AboutBread/Breadbrum"
import { ContactMe } from "../Components/Packages/ContactMe"
import { Packages } from "../Components/Packages/Packages"
import { ScrollTop } from "../Components/ScrollTop"
import { Testimonials } from "../Components/Testimonials/Testimonials"
import { Trending } from "../Components/Trending/Trending"
import { loadScripts,unloadScripts } from "../Components/LoadScript"

export const PackagePage=()=>{
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
        <Breadbrum title="Courses" />
        <Trending/>
        <Packages/>
        <ContactMe/>
        <Testimonials/>
        <ScrollTop/>
        </>
    )
}
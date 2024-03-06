import { Breadbrum } from "../Components/AboutBread/Breadbrum"
import { ContactMe } from "../Components/Packages/ContactMe"
import { Packages } from "../Components/Packages/Packages"
import { ScrollTop } from "../Components/ScrollTop"
import { Testimonials1 } from "../Components/Testimonials/Testimonials1"
import { loadScripts,unloadScripts } from "../Components/LoadScript"
import { useEffect } from "react"

export const PricingPage=()=>{
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
        <Breadbrum title="Pricing Plans" />
        <Packages/>
        <ContactMe/>
        <Testimonials1/>
        <ScrollTop/>
        </>
    )
}
import { AboutBread } from "../Components/AboutBread/AboutBread"
import { AboutCom } from "../Components/About/AboutCom"
import { KnowMore } from "../Components/AboutBread/KnowMore"
import { Choosing } from "../Components/Trending/Choosing"
import { Testimonials } from "../Components/Testimonials/Testimonials"
import { CompanySlider } from "../Components/Trending/CompanySlider"
import { loadScripts,unloadScripts } from "../Components/LoadScript"
import { useEffect } from "react"

export const Pageabout=()=>{
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
<div>
    <AboutBread/>
    <AboutCom/>
    <KnowMore/>
    <Choosing/>
    <Testimonials/>
    <CompanySlider/>
</div>                                                        
    )
}
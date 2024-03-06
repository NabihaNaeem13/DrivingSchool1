import { Blog } from "../Components/Blog/Blog"
import { BookNow } from "../Components/BookNow/BookNow"
import { FAQ } from "../Components/FAQ/FAQ"
import { Gallery } from "../Components/Gallery/Gallery"
import { Instructor } from "../Components/Instructor/Instructor"
import { ScrollTop } from "../Components/ScrollTop"
import { Services } from "../Components/Services/Services"
import { Testimonials } from "../Components/Testimonials/Testimonials"
import { Choosing } from "../Components/Trending/Choosing"
import { CompanySlider } from "../Components/Trending/CompanySlider"
import { Trending } from "../Components/Trending/Trending"
import { WorkProcess } from "../Components/WorkProcess/WorkProcess"
import { TopSlider } from "../Components/topSlider/TopSlider"
import { AboutCom } from "../Components/About/AboutCom"
import { loadScripts,unloadScripts } from "../Components/LoadScript"
import { useEffect } from "react"
import { TopSlider2 } from "../Components/topSlider/TopSlider2"

export const LandingPage=()=>{
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
        <TopSlider2/>
        <AboutCom/>
        <Trending/>
        <FAQ/>
        {/*<Instructor/>*/}
        <Choosing/>
        <Gallery/>
        <WorkProcess/>
        <Testimonials/>
        <BookNow/>
        <Blog/> 
        <CompanySlider/>
        <ScrollTop/></>
    )
}
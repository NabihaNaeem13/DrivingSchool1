import { Breadbrum } from "../Components/AboutBread/Breadbrum"
import { ScrollTop } from "../Components/ScrollTop"
import { loadScripts,unloadScripts } from "../Components/LoadScript"
import { useEffect, useState } from "react"
import { PreLoad } from "../Components/Header/PreLoad"

export const ErrorPage=()=>{
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const scripts = loadScripts();

    setTimeout(() => {
      setLoading(false); 
    }, 2000);

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
        {loading ? (
        <PreLoad />
      ) : ( <>
        <Breadbrum title="404 - Error Page"/>
       <section className="space">
  <div className="container">
    <div className="error-img">
      <img src="assets/img/theme-img/error.svg" alt="404 image" />
      </div>
      <div className="error-content">
        <h2 className="error-title">
            <span className="text-theme">OooPs!</span> Page Not Found</h2>
            <p className="error-text">Oops! The page you are looking for does not exist. It might have been moved or deleted. Please check and try again.</p><a href="home-driving-school.html" className="th-btn"><i className="fal fa-home me-2" />Back To Home</a></div></div></section>

        <ScrollTop/>
       </>)}</>
      
    )
}
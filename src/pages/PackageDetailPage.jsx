import { Breadbrum } from "../Components/AboutBread/Breadbrum"
import { PackagesContent } from "../Components/Packages/PackagesContent";
import { ScrollTop } from "../Components/ScrollTop";
import { loadScripts,unloadScripts } from "../Components/LoadScript"
import { useEffect } from "react";

export const PackageDetailPage=()=>{

const currentPath = window.location.pathname;
const pathParts = currentPath.split('/');
const encodedName = pathParts[pathParts.length - 1];
const name = decodeURIComponent(encodedName);

console.log(name);
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
        <Breadbrum title={name} />
        <PackagesContent/>
        <ScrollTop/>
        </>
    )
}
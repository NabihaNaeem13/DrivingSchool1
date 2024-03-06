import { Breadbrum } from "../Components/AboutBread/Breadbrum"
import { ScrollTop } from "../Components/ScrollTop"
import { loadScripts,unloadScripts } from "../Components/LoadScript"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export const ProjectDetailPage=()=>{
  const [displayedProjects, setDisplayedProjects] = useState(9);

  const loadMoreProjects = () => {
      setDisplayedProjects(displayedProjects + 6);
  };

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


      const [gd,setgd]=useState();
      const galleryfunction=async()=>{
        try{
           const res=await axios.get('https://bpds.thedatech.com/api/gallery');
           setgd(res.data.data.data)
          
        }catch(err){
          console.log(err)
        }
      }
      useEffect(()=>{
        galleryfunction()
      },[])

    return(
      <>
      <Breadbrum title="Car Available for Drive"/>
         <section className="space">
<div className="container">
 <div className="row gy-30">
   {gd && gd.slice(0, displayedProjects).map(({id,image,name})=>{
     return(
         <div className="col-xl-4 col-md-6" key={id}>
         <div className="project-card">
             <div className="project-img">
                 <img src={image} alt="project image" />
                 </div>
                 <div className="project-content">
                     {/*<p className="project-subtitle">Driving Practice</p> */}
                     <h3 className="box-title2">
                         <Link to="/Car-available-for-drive">{name}</Link></h3>
                         </div>
                         <Link to="/Car-available-for-drive" className="project-btn"><i className="far fa-arrow-right" /></Link>
                         </div>
                         </div>
     )
   })}

     {displayedProjects < gd && gd.length && (
             <div className="text-center mt-40">
                 <button className="th-btn" onClick={loadMoreProjects}>
                     Load More
                 </button>
             </div>
         )}
     </div>
     </div>
     </section>

      <ScrollTop/>

     </>
    )
}
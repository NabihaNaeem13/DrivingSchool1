import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Gallery=()=>{
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
      <section className="space">
  <div className="container">
    <div className="title-area text-center"><span className="sub-title"><img src="assets/img/theme-img/title_shape_1.svg" alt="shape" />Our Gallery</span>
      <h2 className="sec-title">See Our Student Gallery</h2>
    </div>
    <div className="row gy-30">
      {gd && gd.slice(0,6).map(({image,name,id})=>{
        console.log('image',image);
        return(
          <div className="col-xl-4 col-md-6" key={id}>
          <div className="project-card">
            <div className="project-img"><img src={image} alt={name} />
            </div>
            <div className="project-content">
              <h3 className="box-title2"><Link to="/students">{name}</Link></h3>
            </div><Link to="/students" className="project-btn"><i className="far fa-arrow-right" /></Link>
          </div>
        </div>
        )
      })}
    </div>
  </div>
</section>

    )
    }
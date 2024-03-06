import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const dataBlog=[{
  id:1,
  image:"assets/img/blog/blog1.jpg",
  date:"18 July, 2018",
  title:'DANGERS OF SLEEPING WHILST SLEEP DEPRIVED'
},{
  id:2,
  image:"assets/img/blog/blog2.jpg",
  date:"15 October, 2018",
  title:'WHY AUTOMATIC DRIVING LESSONS HELP YOU PASS FASTER'
},{
  id:3,
  image:"assets/img/blog/blog3.jpg",
  date:"22 October, 2018",
  title:'HOW TO REMEMBER THE STOPPING AND BREAKING DISTANCE OF A CAR'
}]

export const Blog=()=>{
  const [blogs,setblogs]=useState();
  const getgallery=async()=>{
    try{
       const res=await axios.get('https://bpds.thedatech.com/api/blogs',{
        headers: {
          'Accept': 'application/json, */*'
        }
      });
       setblogs(res.data.blogs)
    }catch(err){
      console.log(err)
    }
  }
      useEffect(()=>{
        getgallery()
      },[])
    return(
      <section className="space bg-smoke" id="blog-sec">
  <div className="container" style={{paddingTop:'170px'}}>
    <div className="title-area text-center"><span className="sub-title"><img src="assets/img/theme-img/title_shape_1.svg" alt="shape" />Blog &amp; News</span>
      <h2 className="sec-title">Our Latest News &amp; Articles</h2>
    </div>
    <div className="row slider-shadow th-carousel" data-slide-show={3} data-lg-slide-show={2} data-md-slide-show={2} data-sm-slide-show={1} data-arrows="true">
      {blogs && blogs.map(({id,banner,title,slug,date})=>{
        return(
          <div className="col-md-6 col-xl-4" key={id}>
          <div className="blog-card">
            <div className="blog-img"><img src={banner} alt="blog image" /></div>
            <div className="blog-content">
              <div className="blog-meta">
              <Link to="/blog"><i className="fas fa-calendar-days" />{date}</Link></div>
              <h3 className="box-title">
                <Link to={`/${slug}`}>{title}</Link></h3>
                  <Link to={`/${slug}`} className="line-btn">Read More<i className="fas fa-arrow-right" /></Link>
            </div>
          </div>
        </div>
        )
      })}

    </div>
  </div>
</section>

    )
}
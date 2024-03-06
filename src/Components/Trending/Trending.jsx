import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Slider from "react-slick";

export const Trending=()=>{
  const [course1,setcourse1]=useState();
  

  var settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  };

  const getcourse=async()=>{
    try{
       const res=await axios.get('https://bpds.thedatech.com/api/packages');
       setcourse1(res.data.data)
       console.log('res',res,'res.data.data',res.data.data)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    getcourse()
  },[])

    return(
       <section className="space bg-smoke" data-bg-src="assets/img/bg/course_bg_1.jpg">
  <div className="shape-mockup" data-bottom={0} data-left={0}><img src="assets/img/shape/block_1.png" alt="shape" />
  </div>
  <div className="shape-mockup" data-bottom="0%" data-right="0.5%"><img src="assets/img/shape/light_1.png" alt="shape" /></div>
  <div className="shape-mockup movingCar" data-bottom="1%" data-right="3.5%"><img src="assets/img/shape/car.png" alt="shape"/></div>
  <div className="container">
    <div className="title-area text-center"><span className="sub-title"><img src="assets/img/theme-img/title_shape_1.svg" alt="shape" />Our Teenagers Package</span>
      <h2 className="sec-title">Our Popular Driving Package</h2>
    </div>
    <div className="row slider-shadow">
      <Slider {...settings} className="testionlidpev">
        {course1 && course1.map((item,index)=>{
       const paragraphs = item.description.split('</p>');
       const sentences = paragraphs[0].split(/[.|]|\bsituations\b/);
       const firstSentence = sentences[0] + '.';
    
          return(
            <div className="col-xl-6" key={item.id+index}>
            <div className="course-card">
            <div className="course-card_img"><img src="assets/img/course/course_1_1.jpg" alt="Image" /></div>
            <div className="course-card_content">
              <div className="price-wrap"><span className="category"><i className="fa-solid fa-chart-simple me-1" />Covered Area: {item.area_covered}</span></div>
              <h3 className="box-title"><Link to='/courses/Defensive Driving'>{item.title}</Link></h3>
              <div className="course-card_text" dangerouslySetInnerHTML={{ __html: firstSentence}}/>
              <div><Link to={`/courses/${item.slug}`} className="th-btn btn-small">Buy Now<i className="fas fa-arrow-right ms-2" /></Link></div>
            </div>
          </div>
          </div>
          )
        })}
      </Slider>
    </div>
  </div>
</section>
    )
}
import { Link } from "react-router-dom"
import Slider from "react-slick";

export const TopSlider2=()=>{
    const CustomPrevButton = (props) => {
        const { className, onClick } = props;
        return (
          <button className={className} onClick={onClick}>
            {/* Your custom previous button icon or content */}
            <i className="far fa-arrow-left"></i>
          </button>
        );
      };
      
      // Define your custom next button component
      const CustomNextButton = (props) => {
        const { className, onClick } = props;
        return (
          <button className={className} onClick={onClick}>
            {/* Your custom next button icon or content */}
            <i className="far fa-arrow-right"></i>
          </button>
        );
      };
      var settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      autoplay: true,
      prevArrow: <CustomPrevButton />,
      nextArrow: <CustomNextButton />,
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
    return(
        <div className="th-hero-wrapper hero-7" id="hero">
           <Slider {...settings}>
           <div className="newtheherocontainer">
    <div className="newtheherocontainerbackground-image"  style={{backgroundImage:"url('assets/img/hero/hero_bg_1.jpg')"}}>
    <div className="hero-shape-wrap" data-ani="slideinup" data-ani-delay="0.1s">
        <div className="hero-shape">
          <div className="shape1"><img src="assets/img/hero/line_shape.svg" alt="shape" /></div>
          <div className="shape2"><img src="assets/img/hero/offer.png" alt="shape" /></div>
        </div>
      </div>
    <div className="container shoowbox">
        <div className="hero-style7"><span className="sub-title has-line" data-ani="slideinleft" data-ani-delay="0.1s">Grow Up Your Driving Skill</span>
          <h1 className="hero-title3" data-ani="slideinleft" data-ani-delay="0.3s">Learn to Drive</h1>
          <h1 className="hero-title3" data-ani="slideinleft" data-ani-delay="0.5s">With Confidence</h1>
          <p className="hero-text" data-ani="slideinleft" data-ani-delay="0.7s">Bay Pass Driving School, LLC offers great deals to our teens and Adults for driving lesson packages under the supervision of highly trained and DMV certified driving instructors.</p>
          <div className="btn-group" data-ani="slideinleft" data-ani-delay="0.9s"><Link to="/about" className="th-btn style3">Discover More<i className="fas fa-arrow-right ms-2" /></Link>
          </div>
        </div>
      </div>
    </div>
    
</div>
<div className="newtheherocontainer">
    <div className="newtheherocontainerbackground-image"  style={{backgroundImage:"url('assets/img/hero/hero_bg_7_2.jpg')"}}>
    <div className="hero-shape-wrap">
        <div className="hero-shape">
          <div className="shape1"><img src="assets/img/hero/line_shape.svg" alt="shape" /></div>
          <div className="shape2"><img src="assets/img/hero/offer.png" alt="shape" /></div>
        </div>
      </div>
      <div className="container shoowbox">
        <div className="hero-style7"><span className="sub-title has-line">Grow Up Your Driving Skill</span>
          <h1 className="hero-title3">Learn to Drive</h1>
          <h1 className="hero-title3">With Confidence</h1>
          <p className="hero-text">Bay Pass Driving School, LLC offers great deals to our teens and Adults for driving lesson packages under the supervision of highly trained and DMV certified driving instructors.</p>
          <div className="btn-group"><Link to="/about" className="th-btn style3">Discover More<i className="fas fa-arrow-right ms-2" /></Link>
          </div>
        </div>
      </div>
    </div>
    <img src="assets/img/hero/hero_overlay_7.png" alt="Overlay Image" className="newtheherocontaineroverlay-image"/>
</div> 
<div className="newtheherocontainer">
    <div className="newtheherocontainerbackground-image"  style={{backgroundImage:"url('assets/img/hero/hero_bg_7_3.jpg')"}}>
    <div className="hero-shape-wrap">
        <div className="hero-shape">
          <div className="shape1"><img src="assets/img/hero/line_shape.svg" alt="shape" /></div>
          <div className="shape2"><img src="assets/img/hero/offer.png" alt="shape" /></div>
        </div>
      </div>
    <div className="container shoowbox">
        <div className="hero-style7"><span className="sub-title has-line">Grow Up Your Driving Skill</span>
          <h1 className="hero-title3">Learn to Drive</h1>
          <h1 className="hero-title3">With Confidence</h1>
          <p className="hero-text">Bay Pass Driving School, LLC offers great deals to our teens and Adults for driving lesson packages under the supervision of highly trained and DMV certified driving instructors.</p>
          <div className="btn-group"><Link to="/about" className="th-btn style3">Discover More<i className="fas fa-arrow-right ms-2" /></Link>
          </div>
        </div>
      </div>
    </div>
    <img src="assets/img/hero/hero_overlay_7.png" alt="Overlay Image" className="newtheherocontaineroverlay-image"/>
</div>       

    </Slider>

     
        </div>
    )
}
/*   <Slider {...settings} className="h-100">
           <div className="newtheherocontainer">
    <div className="newtheherocontainerbackground-image"  style={{backgroundImage:"url('assets/img/hero/hero_bg_1.jpg')"}}>
    <div className="hero-shape-wrap" data-ani="slideinup" data-ani-delay="0.1s">
        <div className="hero-shape">
          <div className="shape1"><img src="assets/img/hero/line_shape.svg" alt="shape" /></div>
          <div className="shape2"><img src="assets/img/hero/offer.png" alt="shape" /></div>
        </div>
      </div>
    <div className="container">
        <div className="hero-style7"><span className="sub-title has-line" data-ani="slideinleft" data-ani-delay="0.1s">Grow Up Your Driving Skill</span>
          <h1 className="hero-title3" data-ani="slideinleft" data-ani-delay="0.3s">Learn to Drive</h1>
          <h1 className="hero-title3" data-ani="slideinleft" data-ani-delay="0.5s">With Confidence</h1>
          <p className="hero-text" data-ani="slideinleft" data-ani-delay="0.7s">Bay Pass Driving School, LLC offers great deals to our teens and Adults for driving lesson packages under the supervision of highly trained and DMV certified driving instructors.</p>
          <div className="btn-group" data-ani="slideinleft" data-ani-delay="0.9s"><Link to="/about" className="th-btn style3">Discover More<i className="fas fa-arrow-right ms-2" /></Link>
          </div>
        </div>
      </div>
    </div>
    
</div>
<div className="newtheherocontainer">
    <div className="newtheherocontainerbackground-image"  style={{backgroundImage:"url('assets/img/hero/hero_bg_7_2.jpg')"}}>
    <div className="hero-shape-wrap" data-ani="slideinup" data-ani-delay="0.1s">
        <div className="hero-shape">
          <div className="shape1"><img src="assets/img/hero/line_shape.svg" alt="shape" /></div>
          <div className="shape2"><img src="assets/img/hero/offer.png" alt="shape" /></div>
        </div>
      </div>
    <div className="container">
        <div className="hero-style7" style={{zIndex:"1200 !important",opacity:"1"}}><span className="sub-title has-line" data-ani="slideinleft" data-ani-delay="0.1s">Grow Up Your Driving Skill</span>
          <h1 className="hero-title3" data-ani="slideinleft" data-ani-delay="0.3s">Learn to Drive</h1>
          <h1 className="hero-title3" data-ani="slideinleft" data-ani-delay="0.5s">With Confidence</h1>
          <p className="hero-text" data-ani="slideinleft" data-ani-delay="0.7s">Bay Pass Driving School, LLC offers great deals to our teens and Adults for driving lesson packages under the supervision of highly trained and DMV certified driving instructors.</p>
          <div className="btn-group" data-ani="slideinleft" data-ani-delay="0.9s"><Link to="/about" className="th-btn style3">Discover More<i className="fas fa-arrow-right ms-2" /></Link>
          </div>
        </div>
      </div>
    </div>
    <img src="assets/img/hero/hero_overlay_7.png" alt="Overlay Image" className="newtheherocontaineroverlay-image"/>
</div> 
<div className="newtheherocontainer">
    <div className="newtheherocontainerbackground-image"  style={{backgroundImage:"url('assets/img/hero/hero_bg_7_3.jpg')"}}>
    <div className="hero-shape-wrap" data-ani="slideinup" data-ani-delay="0.1s">
        <div className="hero-shape">
          <div className="shape1"><img src="assets/img/hero/line_shape.svg" alt="shape" /></div>
          <div className="shape2"><img src="assets/img/hero/offer.png" alt="shape" /></div>
        </div>
      </div>
    <div className="container">
        <div className="hero-style7"><span className="sub-title has-line" data-ani="slideinleft" data-ani-delay="0.1s">Grow Up Your Driving Skill</span>
          <h1 className="hero-title3" data-ani="slideinleft" data-ani-delay="0.3s">Learn to Drive</h1>
          <h1 className="hero-title3" data-ani="slideinleft" data-ani-delay="0.5s">With Confidence</h1>
          <p className="hero-text" data-ani="slideinleft" data-ani-delay="0.7s">Bay Pass Driving School, LLC offers great deals to our teens and Adults for driving lesson packages under the supervision of highly trained and DMV certified driving instructors.</p>
          <div className="btn-group" data-ani="slideinleft" data-ani-delay="0.9s"><Link to="/about" className="th-btn style3">Discover More<i className="fas fa-arrow-right ms-2" /></Link>
          </div>
        </div>
      </div>
    </div>
    <img src="assets/img/hero/hero_overlay_7.png" alt="Overlay Image" className="newtheherocontaineroverlay-image"/>
</div>       

    </Slider> */
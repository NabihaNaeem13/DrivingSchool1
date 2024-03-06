import { Link } from "react-router-dom"
import Slider from "react-slick";

export const Services=()=>{

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
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: <CustomPrevButton />,
  nextArrow: <CustomNextButton />,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
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
      <section className="space-top feature-sec1 style2">
  <div className="container">
    <div className="row justify-content-lg-between justify-content-center align-items-end">
      <div className="col-lg">
        <div className="title-area text-center text-lg-start"><span className="sub-title"><img src="assets/img/theme-img/title_shape_1.svg" alt="shape" />Our Services</span>
          <h2 className="sec-title">We Provide Service For You</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <Slider {...settings} className="serviceslidpev" id="featureSlide">
      <div className="col-md-6 col-xl-3 p-2">
        <div className="feature-card" data-bg-src="assets/img/bg/feature_card_bg.png">
          <div className="line-icon"><img src="assets/img/icon/feature_card_1.svg" alt="icon" /></div>
          <h3 className="box-title2">Instructor Training</h3>
          <p className="feature-card_text">Brainstorm words related to confidence, and skill.</p>
        </div>
      </div>
      <div className="col-md-6 col-xl-3 p-2">
        <div className="feature-card" data-bg-src="assets/img/bg/feature_card_bg.png">
          <div className="line-icon"><img src="assets/img/icon/feature_card_2.svg" alt="icon" /></div>
          <h3 className="box-title2">Get License</h3>
          <p className="feature-card_text">A driving license is an official document that authorizes.</p>
        </div>
      </div>
      <div className="col-md-6 col-xl-3 p-2">
        <div className="feature-card" data-bg-src="assets/img/bg/feature_card_bg.png">
          <div className="line-icon"><img src="assets/img/icon/feature_card_3.svg" alt="icon" /></div>
          <h3 className="box-title2">Easy Learn Driving</h3>
          <p className="feature-card_text">Our course module is very much easy to learn.</p>
        </div>
      </div>
      <div className="col-md-6 col-xl-3 p-2">
        <div className="feature-card" data-bg-src="assets/img/bg/feature_card_bg.png">
          <div className="line-icon"><img src="assets/img/icon/feature_card_4.svg" alt="icon" /></div>
          <h3 className="box-title2">Traffic Guideline</h3>
          <p className="feature-card_text">We also teach a full and final traffic guideline for you.</p>
        </div>
      </div>
      <div className="col-md-6 col-xl-3 p-2">
        <div className="feature-card" data-bg-src="assets/img/bg/feature_card_bg.png">
          <div className="line-icon"><img src="assets/img/icon/feature_card_5.svg" alt="icon" /></div>
          <h3 className="box-title2">Video Courses</h3>
          <p className="feature-card_text">Brainstorm words related to confidence, and skill.</p>
        </div>
      </div>
      </Slider>
    </div>
  </div>
</section>

    )
}
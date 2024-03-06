import Slider from "react-slick";

export const CompanySlider=()=>{
  var settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots:false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
  };
    return(
      <div className="bg-smoke border-top py-5">
  <div className="container py-3">
    <div className="row">
      <Slider {...settings} className="testionlidpev">
      <div className="col-auto">
        <div className="brand-box"><img src="assets/img/brand/brand_1_1.svg" alt="Brand Logo" /></div>
      </div>
      <div className="col-auto">
        <div className="brand-box"><img src="assets/img/brand/brand_1_2.svg" alt="Brand Logo" /></div>
      </div>
      <div className="col-auto">
        <div className="brand-box"><img src="assets/img/brand/brand_1_3.svg" alt="Brand Logo" /></div>
      </div>
      <div className="col-auto">
        <div className="brand-box"><img src="assets/img/brand/brand_1_4.svg" alt="Brand Logo" /></div>
      </div>
      <div className="col-auto">
        <div className="brand-box"><img src="assets/img/brand/brand_1_5.svg" alt="Brand Logo" /></div>
      </div>
      <div className="col-auto">
        <div className="brand-box"><img src="assets/img/brand/brand_1_6.svg" alt="Brand Logo" /></div>
      </div>
      <div className="col-auto">
        <div className="brand-box"><img src="assets/img/brand/brand_1_7.svg" alt="Brand Logo" /></div>
      </div>
      </Slider>
    </div>
  </div>
</div>

    )
}
import Slider from "react-slick";

export const Testimonials1=()=>{

  var settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
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
<section className="space bg-smoke" id="testi-sec">
  <div className="shape-mockup" data-top={0} data-left={0}>
    <img src="assets/img/shape/earth_2.png" alt="shape" />
  </div>
  <div className="shape-mockup d-none d-xxl-block" data-top={0} data-right={0}>
    <img src="assets/img/shape/car_2.png" alt="shape" />
  </div>
  <div className="container">
    <div className="title-area text-center">
      <span className="sub-title">
        <img src="assets/img/theme-img/title_shape_1.svg" alt="shape" />Testimonials</span>
      <h2 className="sec-title">What Saying Students Feedback</h2>
    </div>
    <div className="row">
    <Slider {...settings}  className="testionlidpev">
    <div className="col-md-6 col-xl-4 p-2">
        <div className="testi-card">
          <div className="testi-card_quote"><i className="fa-solid fa-quote-right" /></div>
          <div className="testi-card_review"><i className="fa-solid fa-star-sharp" /><i className="fa-solid fa-star-sharp" /><i className="fa-solid fa-star-sharp" /><i className="fa-solid fa-star-sharp" /><i className="fa-solid fa-star-sharp" /></div>
          <p className="testi-card_text">John is a fantastic instructor and made him feel really comfortable. They focused on everything important and when it came test time my nephew wasn’t nervous at all because he had been trained so well. And by the way… he passed the driving test and got his license on the first try! The staff is awesome too! They were able to maneuver through any schedule conflicts with such ease.</p>
          <div className="testi-card_profile">
            <div className="testi-card_avater">
              <img src="assets/img/testimonial/testi_1_1.jpg" alt="Avater" />
              </div>
              <div className="testi-card_content"><h3 className="testi-card_name">Michelle K.</h3>
              <span className="testi-card_desig">Driving Student</span>
              </div>
              </div>
              </div>
              </div>
              <div className="col-md-6 col-xl-4 p-2">
                <div className="testi-card">
                  <div className="testi-card_quote">
                    <i className="fa-solid fa-quote-right" /></div>
                    <div className="testi-card_review"><i className="fa-solid fa-star-sharp" /><i className="fa-solid fa-star-sharp" /><i className="fa-solid fa-star-sharp" /><i className="fa-solid fa-star-sharp" /><i className="fa-solid fa-star-sharp" />
                    </div>
                    <p className="testi-card_text">I would definitely recommend asking for valise if you get your lessons in Airport driving school. the first lessons to the last one lesson.</p>
                    <div className="testi-card_profile">
                      <div className="testi-card_avater"><img src="assets/img/testimonial/testi_1_2.jpg" alt="Avater" /></div>
                      <div className="testi-card_content"><h3 className="testi-card_name">Alex Micelis</h3><span className="testi-card_desig">Driving Student</span>
                      </div>
                      </div>
                      </div>
                      </div>
                      <div className="col-md-6 col-xl-4 p-2">
                        <div className="testi-card"><div className="testi-card_quote"><i className="fa-solid fa-quote-right" /></div>
                        <div className="testi-card_review"><i className="fa-solid fa-star-sharp" /><i className="fa-solid fa-star-sharp" /><i className="fa-solid fa-star-sharp" /><i className="fa-solid fa-star-sharp" /><i className="fa-solid fa-star-sharp" />
                        </div>
                        <p className="testi-card_text">My driving instructor was fantastic; calm, patient and encouraging! I would recommend her to anybody looking to start driving lessons.</p><div className="testi-card_profile"><div className="testi-card_avater"><img src="assets/img/testimonial/testi_1_3.jpg" alt="Avater" /></div>
                        <div className="testi-card_content">
                          <h3 className="testi-card_name">Eliana Santago</h3><span className="testi-card_desig">Driving Student</span>
                          </div>
                          </div>
                          </div>
                          </div>
                          <div className="col-md-6 col-xl-4 p-2">
                            <div className="testi-card">
                              <div className="testi-card_quote"><i className="fa-solid fa-quote-right" /></div>
                              <div className="testi-card_review"><i className="fa-solid fa-star-sharp" /><i className="fa-solid fa-star-sharp" />
                              <i className="fa-solid fa-star-sharp" /><i className="fa-solid fa-star-sharp" /><i className="fa-solid fa-star-sharp" />
                              </div>
                              <p className="testi-card_text">I highly recommend my driving instructor as she was calm, patient, and encouraging. Anyone looking to start driving lessons would benefit.</p>
                              <div className="testi-card_profile">
                                <div className="testi-card_avater"><img src="assets/img/testimonial/testi_1_4.jpg" alt="Avater" />
                                </div>
                                <div className="testi-card_content"><h3 className="testi-card_name">Selina Gomzen</h3>
                                <span className="testi-card_desig">Driving Student</span>
                                </div>
                                </div>
                                </div>
                                </div>
      </Slider>
                                </div>
                                </div>
                                </section>

    )
}
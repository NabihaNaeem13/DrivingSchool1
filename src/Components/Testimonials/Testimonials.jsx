import axios from "axios";
import { useEffect } from "react";
import Slider from "react-slick";

export const Testimonials=()=>{

const getGoogle=async()=>{
  try{
    const res=await axios.get('https://www.google.com/localservices/prolist?g2lbs=AIQllVyRXGnRTuVUSc1TwVTGz9rNyeFLBydh_oVe4y8RAB6aqC2IxxzQbQ7P-x-tYGRoxLnYrCGy-OShaOG5yVOF6AzTPmVfYtDB9USU5YA__wLX4pWR7q2BnfCUv2VuKGiiNr6gZAjz&hl=en-US&gl=us&cs=1&ssta=1&q=bay%20pass%20driving%20school&oq=bay%20pass%20driving%20school&slp=MgA6HENoTUlzckRlMWVHeGhBTVZWOG84QWgzc0tnVU9SAggCYACSAUgKDS9nLzExczJzMjIxeWIKDS9nLzExazlrN2J6ZzkKDS9nLzExc3NtcHBnMHYKDS9nLzExa2o5NjNyODASBBICCAESBAoCCAGaAQYKAhcZEAA%3D&src=2&serdesk=1&sa=X&ved=2ahUKEwiLtdLV4bGEAxVm2jgGHWFqDYgQjGp6BAhQEAE&scp=ChNnY2lkOmRyaXZpbmdfc2Nob29sEl4SEgnNm51GvT-zPhHzUpnjxiWTdBoSCb9LHWUGPrM-ESMMWlVEL_mcIhxOYXppbWFiYWQsIEthcmFjaGksIFBha2lzdGFuKhQNC5nXDhWMj_InHT7t2w4lMSv2JzABGhdiYXkgcGFzcyBkcml2aW5nIHNjaG9vbCIXYmF5IHBhc3MgZHJpdmluZyBzY2hvb2wqDkRyaXZpbmcgc2Nob29s')
    console.log('res of google',res)
  }catch(err){
     console.log('google err',err)
  }
}


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
    slidesToShow: 3,
    slidesToScroll: 1,
  autoplay: true,
  prevArrow: <CustomPrevButton />,
  nextArrow: <CustomNextButton />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
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

  const fetchReviews = async () => {
    const apiKey = 'YOUR_API_KEY';
    const placeId = 'PLACE_ID'; // Extracted from the Google Maps URL

    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,reviews&key=${apiKey}`);
        const data = await response.json();
        
        // Extract and display reviews from the response data
        const reviews = data.result.reviews;
        reviews.forEach(review => {
            console.log(`Author: ${review.author_name}, Rating: ${review.rating}, Text: ${review.text}`);
        });
    } catch (error) {
        console.error('Error fetching reviews:', error);
    }
};



  useEffect(()=>{
    getGoogle()
    fetchReviews()
  },[])
    return(
     <section className="space">
  <div className="shape-mockup" data-top="1%" data-right={0}><img src="assets/img/shape/earth_1.png" alt="shape" />
  </div>
  <div className="container">
    <div className="title-area text-center"><span className="sub-title"><img src="assets/img/theme-img/title_shape_1.svg" alt="shape" />Testimonials</span>
      <h2 className="sec-title">What Saying Students Feedback</h2>
    </div>
    <div className="row">
      <Slider {...settings}  className="serviceslidpev">
      <div className="col-lg-6 p-2">
        <div className="testi-box">
          <div className="testi-box_img"><img src="assets/img/testimonial/testi_2_1.jpg" alt="Avater" />
            <div className="play-btn"><i className="fa-solid fa-quote-right" /></div>
          </div>
          <div className="testi-box_content">
            <p className="testi-box_text">“ohn is a fantastic instructor and made him feel really comfortable. They focused on everything important and when it came test time my nephew wasn’t nervous at all because he had been trained so well. And by the way… he passed the driving test and got his license on the first try! The staff is awesome too! They were able to maneuver through any schedule conflicts with such ease.”</p>
            <h3 className="testi-box_name">Michelle K.</h3>
            <p className="testi-box_desig">Driving Student</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 p-2">
        <div className="testi-box">
          <div className="testi-box_img"><img src="assets/img/testimonial/testi_2_2.jpg" alt="Avater" />
            <div className="play-btn"><i className="fa-solid fa-quote-right" /></div>
          </div>
          <div className="testi-box_content">
            <p className="testi-box_text">“John is a fantastic instructor and made him feel really comfortable. They focused on everything important and when it came test time my nephew wasn’t nervous at all because he had been trained so well. And by the way… he passed the driving test and got his license on the first try! The staff is awesome too! They were able to maneuver through any schedule conflicts with such ease.”</p>
            <h3 className="testi-box_name">Michelle K.</h3>
            <p className="testi-box_desig">Driving Student</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 p-2">
        <div className="testi-box">
          <div className="testi-box_img"><img src="assets/img/testimonial/testi_2_3.jpg" alt="Avater" />
            <div className="play-btn"><i className="fa-solid fa-quote-right" /></div>
          </div>
          <div className="testi-box_content">
            <p className="testi-box_text">“My driving instructor was fantastic; calm, patient and
              encouraging! I recommend her to anybody looking to start driving.”</p>
            <h3 className="testi-box_name">Mason Robert</h3>
            <p className="testi-box_desig">Driving Student</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 p-2">
        <div className="testi-box">
          <div className="testi-box_img"><img src="assets/img/testimonial/testi_2_4.jpg" alt="Avater" />
            <div className="play-btn"><i className="fa-solid fa-quote-right" /></div>
          </div>
          <div className="testi-box_content">
            <p className="testi-box_text">“I highly recommend my instructor she was calm, and motivated.
              Anyone looking to start driving would be benefited.”</p>
            <h3 className="testi-box_name">Mariana Mojarin</h3>
            <p className="testi-box_desig">Driving Student</p>
          </div>
        </div>
      </div>
      </Slider>
     
    </div>
  </div>
</section>

    )
}
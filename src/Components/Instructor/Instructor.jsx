import Slider from "react-slick";

export const Instructor=()=>{
  var settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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
      <section className="space">
  <div className="container z-index-common">
    <div className="title-area text-center"><span className="sub-title"><img src="assets/img/theme-img/title_shape_1.svg" alt="shape" />Our Best Instructor</span>
      <h2 className="sec-title">Meet Our Qualified Instructor</h2>
    </div>
    <div className="row">
    <Slider {...settings} className="testionlidpev">
    <div className="col-sm-6 col-lg-4 col-xl-3 p-2">
        <div className="th-team team-card">
          <div className="team-img"><img src="assets/img/team/team_1_1.jpg" alt="Team" />
            <div className="th-social"><a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a> <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div><span className="team-desig">CEO, of Founder</span>
          <h3 className="box-title"><a href="team-details.html">Mac Alexixe</a></h3>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3 p-2">
        <div className="th-team team-card">
          <div className="team-img"><img src="assets/img/team/team_1_2.jpg" alt="Team" />
            <div className="th-social"><a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a> <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div><span className="team-desig">Instructor</span>
          <h3 className="box-title"><a href="team-details.html">Alex Julian</a></h3>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3 p-2">
        <div className="th-team team-card">
          <div className="team-img"><img src="assets/img/team/team_1_3.jpg" alt="Team" />
            <div className="th-social"><a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a> <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div><span className="team-desig">Instructor</span>
          <h3 className="box-title"><a href="team-details.html">Jenifer Lopez</a></h3>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3 p-2">
        <div className="th-team team-card">
          <div className="team-img"><img src="assets/img/team/team_1_4.jpg" alt="Team" />
            <div className="th-social"><a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a> <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div><span className="team-desig">Senior Instructor</span>
          <h3 className="box-title"><a href="team-details.html">Henry Joseph</a></h3>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3 p-2">
        <div className="th-team team-card">
          <div className="team-img"><img src="assets/img/team/team_1_5.jpg" alt="Team" />
            <div className="th-social"><a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a> <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a> <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a> <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div><span className="team-desig">Instructor</span>
          <h3 className="box-title"><a href="team-details.html">Poppy Joanne</a></h3>
        </div>
      </div>
    </Slider>
     

    </div>
  </div>
</section>

    )
}
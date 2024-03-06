import { Link } from "react-router-dom"

export const BookNow=()=>{
    return(
      <section className="cta-sec1 style2" data-bg-src="assets/img/hero/hero_bg_1_3.jpg" data-sec-pos="bottom-half"><a href="tel:+16369729901" className="play-btn"><i className="fas fa-phone" /></a>
  <div className="container z-index-common space">
    <div className="row justify-content-center">
      <div className="col-xxl-7 col-lg-8 text-center">
        <div className="title-area mb-30"><span className="sub-title h4">+1 (510) 331-2236</span>
          <h2 className="sec-title text-white">Book Your First Driving Lesson And Contact Us</h2>
        </div>
        <div className="btn-group justify-content-center"><Link to="/contact" className="th-btn style3">Book
            Now<i className="fa-regular fa-arrow-right ms-2" /></Link>
             <Link to="/contact" className="th-btn style5">Contact Us<i className="fa-regular fa-arrow-right ms-2" /></Link></div>
      </div>
    </div>
  </div>
</section>

    )
}
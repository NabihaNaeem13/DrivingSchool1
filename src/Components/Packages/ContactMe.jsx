import { Link } from "react-router-dom"

export const ContactMe=()=>{
    return(
       <section data-bg-src="assets/img/bg/cta_bg_1.png">
  <div className="shape-mockup man-shape" data-bottom={0} data-left="2%">
    <img src="assets/img/normal/man_shape.png" alt="shape" /></div>
  <div className="container z-index-common">
    <div className="cta-1">
      <div className="row gy-5 text-center text-md-start align-items-center justify-content-lg-between justify-content-center">
        <div className="col-md-8">
          <div className="title-area mb-0">
            <div className="sub-title">
              <div className="call-btn">
                <a href="tel:+1510331-2236" className="play-btn"><i className="fas fa-play" /></a>
                <div className="media-body"><span className="btn-text">Call Us Any Time</span> 
                  <a href="tel:+1510331-2236" className="btn-title text-white">+1 (510) 331-2236</a>
                </div>
              </div>
            </div>
            <h2 className="sec-title text-white">Start Learning To Drive Today Contact Now!</h2>
          </div>
        </div>
        <div className="col-md-auto">
          <Link to="/contact" className="th-btn style3">Contact Us<i className="fas fa-arrow-right ms-2" /></Link>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}
import { Link } from "react-router-dom"

export const TopSlider=()=>{
    return(
   <div className="th-hero-wrapper hero-7" id="hero">
  <div className="hero-slider-7 th-carousel" data-adaptive-height="true" data-fade="true" data-slide-show={1} data-md-slide-show={1} data-arrows="true" data-xl-arrows="true">
    <div className="th-hero-slide">
      <div className="hero-shape-wrap" data-ani="slideinup" data-ani-delay="0.1s">
        <div className="hero-shape">
          <div className="shape1"><img src="assets/img/hero/line_shape.svg" alt="shape" /></div>
          <div className="shape2"><img src="assets/img/hero/offer.png" alt="shape" /></div>
        </div>
      </div>
      <div className="th-hero-bg" data-bg-src="assets/img/hero/hero_bg_1.jpg"><img src="assets/img/hero/hero_bg_1.jpg" alt="overlay" /></div>
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
    <div className="th-hero-slide">
      <div className="hero-shape-wrap" data-ani="slideinup" data-ani-delay="0.1s">
        <div className="hero-shape">
          <div className="shape1"><img src="assets/img/hero/line_shape.svg" alt="shape" /></div>
          <div className="shape2"><img src="assets/img/hero/offer.png" alt="shape" /></div>
        </div>
      </div>
      <div className="th-hero-bg" data-bg-src="assets/img/hero/hero_bg_7_2.jpg"><img src="assets/img/hero/hero_overlay_7.png" alt="overlay" /></div>
      <div className="container">
        <div className="hero-style7"><span className="sub-title has-line" data-ani="slideinleft" data-ani-delay="0.1s">Grow Up Your Driving Skill</span>
          <h1 className="hero-title3" data-ani="slideinleft" data-ani-delay="0.3s">Drive with Our</h1>
          <h1 className="hero-title3" data-ani="slideinleft" data-ani-delay="0.5s">Expert Member</h1>
          <p className="hero-text" data-ani="slideinleft" data-ani-delay="0.7s">Bay Pass Driving School, LLC offers great deals to our teens and Adults for driving lesson packages under the supervision of highly trained and DMV certified driving instructors.</p>
          <div className="btn-group" data-ani="slideinleft" data-ani-delay="0.9s"><Link to="/about" className="th-btn style3">Discover More<i className="fas fa-arrow-right ms-2" /></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="th-hero-slide">
      <div className="hero-shape-wrap" data-ani="slideinup" data-ani-delay="0.1s">
        <div className="hero-shape">
          <div className="shape1"><img src="assets/img/hero/line_shape.svg" alt="shape" /></div>
          <div className="shape2"><img src="assets/img/hero/offer.png" alt="shape" /></div>
        </div>
      </div>
      <div className="th-hero-bg" data-bg-src="assets/img/hero/hero_bg_7_3.jpg"><img src="assets/img/hero/hero_overlay_7.png" alt="overlay" /></div>
      <div className="container">
        <div className="hero-style7"><span className="sub-title has-line" data-ani="slideinleft" data-ani-delay="0.1s">WELCOME TO</span>
          <h1 className="hero-title3" data-ani="slideinleft" data-ani-delay="0.3s">BAYPASS</h1>
          <h1 className="hero-title3" data-ani="slideinleft" data-ani-delay="0.5s">DRIVING SCHOOL</h1>
          <p className="hero-text" data-ani="slideinleft" data-ani-delay="0.7s">Bay Pass Driving School, LLC offers great deals to our teens and Adults for driving lesson packages under the supervision of highly trained and DMV certified driving instructors.</p>
          <div className="btn-group" data-ani="slideinleft" data-ani-delay="0.9s"><Link to="/about" className="th-btn style3">Discover More<i className="fas fa-arrow-right ms-2" /></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
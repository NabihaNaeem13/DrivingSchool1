export const Choosing=()=>{
return(
  <div className="overflow-hidden space-top why-sec1" data-bg-src="assets/img/bg/why_bg_1.jpg">
  <div className="container">
    <div className="row flex-row-reverse">
      <div className="col-xl-6 mb-40 mb-xl-0">
        <div className="img-box2">
          <div className="img1"><img src="assets/img/normal/why_1_1.png" alt="Why" /> <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="icon-btn popup-video"><i className="fas fa-play" /></a></div>
        </div>
      </div>
      <div className="col-xl-6 text-center text-xl-start">
        <div className="title-area mb-30"><span className="sub-title"><img src="assets/img/theme-img/title_shape_1_white.svg" alt="shape" />Why Choose Us?</span>
          <h2 className="sec-title text-white">The journey to becoming a proficient driver</h2>
        </div>
        <div className="choose-feature-wrap">
          <div className="choose-feature">
            <div className="choose-feature_icon"><i className="fa-solid fa-circle-check" /></div>
            <h3 className="box-title">SAFETY MEASURES</h3>
            <p className="choose-feature_text">Our instructors are extensively trained in the safety techniques.</p>
          </div>
          <div className="choose-feature">
            <div className="choose-feature_icon"><i className="fa-solid fa-circle-check" /></div>
            <h3 className="box-title">AFFORDABILITY</h3>
            <p className="choose-feature_text">Recognizing the potential pricing to ensure affordability.</p>
          </div>
          <div className="choose-feature">
            <div className="choose-feature_icon"><i className="fa-solid fa-circle-check" /></div>
            <h3 className="box-title">IDEAL TIMING</h3>
            <p className="choose-feature_text">The present moment presents an excellent opportunity</p>
          </div>
          <div className="choose-feature">
            <div className="choose-feature_icon"><i className="fa-solid fa-circle-check" /></div>
            <h3 className="box-title">CLASS FORMATS</h3>
            <p className="choose-feature_text">We provide both In-Classroom and Online Drivers Education</p>
          </div>
        </div>
        <div className="choose-counter-wrap">
          <div className="choose-counter">
            <h4 className="choose-counter_number"><span className="counter-number">5400</span>+</h4>
            <p className="choose-counter_text">Learn Form Here</p>
          </div>
          <div className="choose-counter">
            <h4 className="choose-counter_number"><span className="counter-number">1350</span>+</h4>
            <p className="choose-counter_text">Current Students</p>
          </div>
          <div className="choose-counter">
            <h4 className="choose-counter_number"><span className="counter-number">150</span>+</h4>
            <p className="choose-counter_text">Expert Instructor</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

)
}
import { Link } from "react-router-dom"

export const AboutCom=()=>{
    return(
       <div className="space" id="about-sec">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-6 mb-30 mb-xl-0">
        <div className="img-box1">
          <div className="img1"><img src="assets/img/normal/about_1_1.jpg" alt="About" /></div>
          <div className="img2"><img src="assets/img/normal/about_1_2.jpg" alt="Image" /></div>
          <div className="year-counter-wrap">
            <div className="year-counter">
              <div className="year-counter_number"><span className="counter-number">23</span>+</div>
              <p className="year-counter_text">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="title-area mb-30"><span className="sub-title"><img src="assets/img/theme-img/title_shape_1.svg" alt="shape" />About Us</span>
          <h2 className="sec-title">Learn To Drive, Drive With Safety And Control.</h2>
        </div>
        <p className="mt-n2 mb-33">Bay Pass Driving School is located in San Ramon, California. We have a passion for teaching safe driving skills and we’ve helped several generations of Bay Area drivers get their licenses as we are deeply committed to imparting safe driving skills. Over the years, we’ve played a pivotal role in guiding multiple generations of Bay Area drivers to secure their licenses. Our school proudly offers a blend of excellent facilities and a team of seasoned professional instructors. We place a strong emphasis on cultivating an engaging learning experience that encourages our students to take responsibility for acquiring the knowledge essential to becoming proficient drivers. Furthermore, Bay Pass Driving School is a fully licensed and bonded online institution, providing a comprehensive Driver Education course and offering the following assistance:</p>
        <div className="video-checklist">
          <div>
            <div className="th-video"><img src="assets/img/normal/about_1_3.jpg" alt="Video" /> <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="play-btn style3 popup-video"><i className="fas fa-play" /></a></div>
          </div>
          <div className="checklist">
            <ul>
              <li><i className="far fa-check-circle" /> Free drivers’ education online.</li>
              <li><i className="far fa-check-circle" /> Free pick up & drop off from desired location</li>
              <li><i className="far fa-check-circle" /> Fully insured and bonded</li>
              <li><i className="far fa-check-circle" /> Running Classes every day 8am-8pm</li>
            </ul>
          </div>
          <div className="checklist">
            <ul>
              <li><i className="far fa-check-circle" /> Six hours behind the wheel training.</li>
              <li><i className="far fa-check-circle" /> Working on self-confidence of nervous students.</li>
              <li><i className="far fa-check-circle" /> Free DMV practice test online</li>
              <li><i className="far fa-check-circle" /> Cars are available for driving tests.</li>
            </ul>
          </div>
        </div><Link to="/about" className="th-btn">About More<i className="fas fa-arrow-right ms-2" /></Link>
      </div>
    </div>
  </div>
</div>
    )
}
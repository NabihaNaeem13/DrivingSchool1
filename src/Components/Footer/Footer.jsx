import { Link } from "react-router-dom"
import { Modal } from 'react-responsive-modal';
import { useEffect, useState } from "react";
import 'react-responsive-modal/styles.css';
import axios from "axios";

export const Footer=()=>{
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [course,setcourse]=useState();

  const getcourse=async()=>{
    try{
       const res=await axios.get('https://bpds.thedatech.com/api/packages');
       setcourse(res.data.data)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    getcourse()
  },[])

    return(
    <footer className="footer-wrapper footer-layout1" data-bg-src="assets/img/bg/footer_bg_1.png">
  <div className="widget-area">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-md-6 col-xl-3">
          <div className="widget footer-widget">
            <div className="th-widget-about">
              <div className="about-logo"><Link to="/"><img src="assets/img/footer.gif" alt="Dride" style={{borderRadius:"25px"}}/></Link></div>
              <p className="about-text">We understand that learning to drive isn’t cheap, many driving schools will take advantage of this and charge you a larger sum than necessary; not us.</p>
              <div className="th-social"><a href="https://www.facebook.com/profile.php?id=100077308695808&mibextid=eQY6cl" target="__blank"><i className="fab fa-facebook-f" /></a> 
              <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></a> 
              <a href="https://www.whatsapp.com/"><i className="fab fa-whatsapp" /></a>
              <a href="https://www.tiktok.com/@baypass.driving.s?_t=8kNWBe1IkTK&_r=1" target="__blank"><i class="fab fa-tiktok"/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-auto">
          <div className="widget widget_nav_menu footer-widget">
            <h3 className="widget_title">Courses</h3>
            <div className="menu-all-pages-container">
              <ul className="menu">
                {course && course.map(({id,title,slug})=>{
                  return(
                    <li key={id+slug}><Link to={`/courses/${slug}`}>{title}</Link></li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-auto">
          <div className="widget widget_nav_menu footer-widget">
            <h3 className="widget_title">Useful Links</h3>
            <div className="menu-all-pages-container">
              <ul className="menu">
                <li><Link to="https://bpds.thedatech.com/register-account" target="__blank">Registration</Link></li>
                <li><Link to="https://bpds.thedatech.com/" target="__blank">Login</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/Car-available-for-drive">Car available for drive</Link></li>
                <li><Link to="/students">Student Gallery</Link></li>
                <li style={{color:"#bdbdbd"}}><a onClick={onOpenModal}>Terms & C’s</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-auto">
          <div className="widget footer-widget">
            <h3 className="widget_title">Contact Us</h3>
            <div className="th-widget-contact">
              <div className="info-box">
                <div className="info-box_icon"><i className="fas fa-location-dot" /></div>
                <p className="info-box_text">2010 Crow Canyon Pl Suite 100, San Ramon CA 945</p>
              </div>
              <div className="info-box">
                <div className="info-box_icon"><i className="fas fa-phone" /></div>
                <p className="info-box_text"><a href="tel:+1510246-8939" className="info-box_link">+1 (510) 246-8939</a> <a href="tel:+1925359-3250" className="info-box_link">+1(925) 359-3250</a></p>
              </div>
              <div className="info-box">
                <div className="info-box_icon"><i className="fas fa-envelope" /></div>
                <p className="info-box_text"><a href="mailto:help24/7@dride.com" className="info-box_link">info@baypassdrivingschool.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright-wrap">
    <div className="container text-center">
      <p className="copyright-text">Copyright <i className="fal fa-copyright" /> 2024 Bay Pass Driving School, LLC. Developed by <Link to="/">DA Tech</Link>



</p>
    </div>
  </div>
  <Modal open={open} onClose={onCloseModal} center>
        <h2 className="mt-2 text-center">Terms & Condition</h2>
        <p>Bay Pass Driving School, LLC was founded with a mission to empower communities by imparting driving skills in a smooth, effective, and user-friendly manner, all while putting people at the forefront of our approach. Our commitment is to offer you a positive and enjoyable driving journey by simplifying the teaching process and infusing a human touch into the experience.</p>
        <p>We feature modern vehicles equipped with dual brake controls and dash cam security cameras, prioritizing your safety. Our cars are meticulously maintained to ensure your well-being.</p>
        <p>We understand that a driver’s license isn’t just a piece of paper; it’s a gateway to a person’s future, career, income, empowerment, and confidence. This recognition is what drives us to constantly innovate and support our customers in realizing their full potential effortlessly.</p>
        <p>Bay Pass Driving School, LLC in the Bay Area is your comprehensive solution. Serving your local area, we deliver dependable driving instruction services. Our professionalism, extensive expertise, and thoughtfully crafted lessons are a testament to our quality.</p>
        <p>Our certified training instructors authorize permits for teenagers upon the completion of 2 hours of driving lessons. We also provide drivers with a certificate of completion (DL400D) once they have finished their 6 hours of training.</p>
        <p>Covered Counties:
Alameda, Contra Costa, Marin, Napa, San Francisco, San Mateo, Santa Clara, Solano, and Sonoma countries</p>
      </Modal>
</footer>

    )
}
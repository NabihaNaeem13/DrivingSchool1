import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import  City from '../data/City';
import axios from "axios";
import { FcOvertime } from "react-icons/fc";

export const Header=()=>{
  const [currentTime, setCurrentTime] = useState('');
  const [selectedTimeZone, setSelectedTimeZone] = useState('America/Los_Angeles');
  const [currentDate, setCurrentDate] = useState('');
  const [open, setOpen] = useState(false);
  const [first_name,setfirst_name]=useState('');
  const [last_name,setlast_name]=useState('');
  const [email,setemail]=useState('');
  const [phone_no,setphone_no]=useState('');
  const [address,setaddress]=useState('');
  const [zip_code,setzip_code]=useState('');
  const [packages_locations,setpackages_locations]=useState('');
  const [time,setTime]=useState('');
  const [permit_no,setpermit_no]=useState('');
  const [send_txt_msgs_to,setsend_txt_msgs_to]=useState('');
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState();


  const dateObj = new Date(currentDate);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('default', { month: 'short' });
  const formattedDate = `${day}-${month}`;

  const [mobileopen,setMobileopen]=useState(false);

  const handleClick = () => {
    if(currentDate!==""){
      setOpen(true);
    }
  };
  
const Menutoggle=()=>{
  if(mobileopen===false){
    return setMobileopen(true)
  }
  else{
    setMobileopen(false)
  }
}
  const timeZones = [
    { value: 'America/Los_Angeles', label: '08:00 am to 08:30 am' },
    { value: 'America/Los_Angeles', label: '08:30 am to 09:00 am' },
    { value: 'America/Los_Angeles', label: '09:00 am to 09:30 am' },
    { value: 'America/Los_Angeles', label: '09:30 am to 10:00 am' },
    { value: 'America/Los_Angeles', label: '10:00 am to 10:30 am' },
    { value: 'America/Los_Angeles', label: '10:30 am to 11:00 am' },
    { value: 'America/Los_Angeles', label: '11:00 am to 11:30 am' },
    { value: 'America/Los_Angeles', label: '11:30 am to 12:00 am' },
    { value: 'America/Los_Angeles', label: '12:00 am to 12:30 pm' },
    { value: 'America/Los_Angeles', label: '12:30 pm to 1:00 pm' },
    { value: 'America/Los_Angeles', label: '1:00 pm to 1:30 pm' },
    { value: 'America/Los_Angeles', label: '1:30 pm to 2:00 pm' },
    { value: 'America/Los_Angeles', label: '2:00 pm to 2:30 pm' },
    { value: 'America/Los_Angeles', label: '2:30 pm to 3:00 pm' },
    { value: 'America/Los_Angeles', label: '3:00 pm to 3:30 pm' },
    { value: 'America/Los_Angeles', label: '3:30 pm to 4:00 pm' },
    { value: 'America/Los_Angeles', label: '4:00 pm to 4:30 pm' },
    { value: 'America/Los_Angeles', label: '4:30 pm to 5:00 pm' },
    { value: 'America/Los_Angeles', label: '5:00 pm to 5:30 pm' },
    { value: 'America/Los_Angeles', label: '5:30 pm to 6:00 pm' },
    { value: 'America/Los_Angeles', label: '6:00 pm to 6:30 pm' },
    { value: 'America/Los_Angeles', label: '6:30 pm to 7:00 pm' },
    // Add more time zones as needed
  ];

  useEffect(() => {
    const [startTime, endTime] = selectedTimeZone.split('to'); // Assuming format is "HH:mm-HH:mm"
    const formattedTimeString = startTime.replace(/:00\s/g, " ");
    setTime(formattedTimeString)
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const formattedTime = new Date().toLocaleTimeString('en-US', options);
    setCurrentTime(formattedTime);
  
    const intervalId = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString('en-US', options);
      setCurrentTime(currentTime);
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, [selectedTimeZone]);

  const handleTimeZoneChange = (event) => {
    setSelectedTimeZone(event.target.value);
  };

  const [selectedState, setSelectedState] = useState('');


const handleStateChange = (event) => {
  const state = event.target.value;
  setSelectedState(state);
  const selectedCity = City.find(city => city.state === state);
  if (selectedCity) {
    setCities(selectedCity.cities);
  } else {
    setCities([]);
  }
};

  const AppointmentBook=async(e,date,time,first_name,last_name,email,phone_no,address,city,state,zip_code,permit_no,packages_locations,send_txt_msgs_to)=>{
    e.preventDefault();
    try{
      const response=await axios.post('https://bpds.thedatech.com/api/send-appointment',{date,time,first_name,last_name,email,phone_no,address,city,state,zip_code,permit_no,packages_locations,send_txt_msgs_to})
      alert(response.data.message)
      setSelectedTimeZone('')
      setCurrentDate('')
      setStates({name:'',state:''})
      setfirst_name('')
      setlast_name('')
      setemail('')
      setphone_no('')
      setaddress('')
      setzip_code('')
      setpackages_locations('')
      setpermit_no('')
      setsend_txt_msgs_to('')
      setOpen(false)
    }catch(err){
      console.log('appointment book',err)
    }
  }

  const [blogs,setblogs]=useState();
  const getgallery=async()=>{
    try{
       const res=await axios.get('https://bpds.thedatech.com/api/blogs',{
        headers: {
          'Accept': 'application/json, */*'
        }
      });
       setblogs(res.data.blogs)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    getgallery()
  },[])

    return(
        <div>
  <div className="sidemenu-wrapper d-lg-block">
    <div className="sidemenu-content"><button className="closeButton sideMenuCls"><i className="far fa-times" /></button>
      <div className="widget">
        <div className="th-widget-about">
        <div className="widget">
        <h3 className="widget_title">Schedule an appointment</h3>
        {open && <i className="fa-duotone fa-arrow-left" style={{cursor:'pointer'}} onClickCapture={()=>setOpen(false)}></i>}
        {open==true?"":<> <input type="date" className="mt-2" value={currentDate} onChange={(e)=>setCurrentDate(e.target.value)}/>
        <div>
        <label htmlFor="timezone" className="mt-2">Select Time:</label>
        <select id="timezone" value={selectedTimeZone} onChange={handleTimeZoneChange}>
          {timeZones.map((timezone, index) => (
            <option key={`${timezone.value}-${index}`} >
              {timezone.label}
            </option>
          ))}
        </select>
      </div>
         <p className="mt-2">Current Time ({selectedTimeZone}): {currentTime}</p>
         <div className="text-center"> <button className="th-btn" onClickCapture={()=>handleClick()}>Next</button></div></>}
       
         {open &&<form className="mt-2 mb-2" onSubmit={(e)=>AppointmentBook(e,formattedDate,time,first_name,last_name,email,phone_no,address,states,selectedState,zip_code,permit_no,packages_locations,send_txt_msgs_to)}>
         <div className="d-flex">
         <input type="text" name="first_name" placeholder="First Name" value={first_name} onChange={(e)=>setfirst_name(e.target.value)}/>
          <input type="text" name="last_name" placeholder="Last Name" value={last_name} onChange={(e)=>setlast_name(e.target.value)}/>
         </div>
         <input type="email" name="email" placeholder="Email address*" required className="mt-2" value={email} onChange={(e)=>setemail(e.target.value)}/>
         <input type="number" name="phone_no" placeholder="Phone Number*" required className="mt-2" value={phone_no} onChange={(e)=>setphone_no(e.target.value)}/>
         <div className="d-flex">
  
<select  name="State"  placeholder="State"
   value={selectedState}
  onChange={handleStateChange}
  className="mt-2">
  <option value="">Select a State</option>
{City && City.map(({id,state})=>{
  return(
    <option key={id+state}>{state}</option>
  )
})}
</select>
<select
  name="City"
  placeholder="City"
  className="mt-2"
  value={states}
  onChange={(e)=>setStates(e.target.value)}
>
<option value="">Select a city</option>
{cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
</select>
         </div>
         <div className="d-flex">
         <input type="text" name="Zip" placeholder="Zip*" className="mt-2" value={zip_code} onChange={(e)=>setzip_code(e.target.value)}/>
         <input type="text" name="Address" placeholder="Address*" required className="mt-2" value={address} onChange={(e)=>setaddress(e.target.value)}/>
         </div>
         <input type="text" required className="mt-2" name="permit_no" placeholder="Permit No*" value={permit_no} onChange={(e)=>setpermit_no(e.target.value)}/>
         <div>
         <select  required className="mt-2" value={packages_locations} onChange={(e)=>setpackages_locations(e.target.value)}>
          <option defaultValue="Packages & Locations">Packages & Locations</option>
           <option>Covered Area: Hayward, San Leandro, Alameda Union City Castro Valley ($146.00)</option>
           <option>Covered Area: Fremont, Newark, Milpitas, Oakland, Emeryville. ($150.00)</option>
           <option>Covered Area: San Francisco, San Mateo, Santa Clara, San Jose, All Surrender Area. ($180.00)</option>
           <option>DrivingCovered Area: San Ramon, Danville, Dublin, Pleasanton, Alamo Oaks. ($160.00)</option>
           <option>DMV - Drive Test ($200.00)</option>
           <option>Freeway ($200.00)</option>
           <option>Senior ($190.00)</option>
         </select>
         </div>
         
         <div className="form-group col-12"><textarea name="send_txt_msgs_to" cols={30} rows={4} className="form-control" placeholder="Your Message" value={send_txt_msgs_to} onChange={(e)=>setsend_txt_msgs_to(e.target.value)} required /></div>
        
    
        <button className="th-btn mt-2" type="submit">Schedule Appointment</button>
         </form>}
        </div>
          <div className="about-logo"><NavLink to="/"><img src="assets/img/footer.gif" alt="Dride" /></NavLink></div>
          <p className="about-text">Bay Pass Driving School, LLC offers great deals to our teens and Adults for driving lesson packages under the supervision of highly trained and DMV certified driving instructors..</p>
          <div className="th-social"><a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a> <a href="https://www.twitter.com/"><i className="fab fa-twitter" /></a> <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></a> <a href="https://www.whatsapp.com/"><i className="fab fa-whatsapp" /></a></div>
        </div>
      </div>
      <div className="widget">
        <h3 className="widget_title">Recent Posts</h3>
        <div className="recent-post-wrap">
          {blogs && blogs.slice(0,3).map(({id,banner,title,slug,date})=>{
            return(
              <div className="recent-post" key={id+slug}>
              <div className="media-img"><NavLink to="/blog"><img src={banner} alt="Blog Image" /></NavLink></div>
              <div className="media-body">
                <h4 className="post-title"><NavLink className="text-inherit" to="/blog">{title}</NavLink></h4>
                <div className="recent-post-meta"><NavLink to="/blog"><i className="fas fa-calendar-days" />{date}</NavLink></div>
              </div>
            </div>
            )
          })}
        </div>
      </div>   
      <p className="copyright-text mt-5">Copyright <i className="fal fa-copyright" /> 2024 Bay Pass Driving School, LLC. Developed by <NavLink to="/">DA Tech</NavLink></p>
    </div>
  </div>
  <div className="popup-search-box d-none d-lg-block"><button className="searchClose"><i className="fal fa-times" /></button>
    <form action="#"><input type="text" placeholder="What are you looking for?" /> <button type="submit"><i className="fal fa-search" /></button></form>
  </div>
  <header className="th-header header-layout7">
    <div className="header-top">
      <div className="container th-container">
        <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
          <div className="col-auto d-none d-lg-block">
            <div className="header-links">
              <ul>
                <li><i className="far fa-location-dot" />2010 Crow Canyon Pl Suite 100, San Ramon CA 945</li>
                <li><i className="far fa-messages" /><a href="mailto:info@baypassdrivingschool.com">info@baypassdrivingschool.com</a>
                </li>
                <li><i className="far fa-phone" /><a href="tel:+1510331-2236">+1 (510) 331-2236</a></li>
              </ul>
            </div>
          </div>
          <div className="col-auto">
            <div className="social-links"><span className="social-title">Follow Us:</span> 
            <a href="https://www.facebook.com/profile.php?id=100077308695808&mibextid=eQY6cl" target="__blank"><i className="fab fa-facebook-f" /></a> 
            <a href="https://www.linkedin.com/" target="__blank"><i className="fab fa-linkedin-in" /></a> 
            <a href="https://www.instagram.com/" target="__blank"><i className="fab fa-instagram" /></a>
             <a href="https://www.whatsapp.com/" target="__blank"><i className="fab fa-whatsapp" /></a>
             <a href="https://www.tiktok.com/@baypass.driving.s?_t=8kNWBe1IkTK&_r=1" target="__blank"><i class="fab fa-tiktok"/></a>
             </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sticky-wrapper ">
      <div className="menu-area">
        <div className="container th-container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-auto">
            <NavLink to="/" style={{ height: "7rem", width: "100%", display: "block" }}><img src="assets/img/footer.gif" alt="Dride" style={{ borderRadius: "20px", height: "7rem", width: "100%",objectFit:"cover" }}/></NavLink>
             
            </div>
            <div className="col-auto mx-auto">
            <p className="mb-2 mt-2 mobilelicense">License# E0025</p>
              <nav className="main-menu d-none d-lg-inline-block">
                 <ul className="text-center mt-2"><li style={{color:'#ff0000',fontSize:'1.5rem',fontWeight:'900'}}>License# E0025</li></ul>
                <ul>
                  <li><NavLink to="/">Home</NavLink>
                    {/*<ul className="sub-menu"> class for home className="menu-item-has-children"
                      <li><a href="home-driving-school.html">Driving School</a></li>
                      <li><a href="home-driving-courses.html">Driving Courses</a></li>
                      <li><a href="home-driving-guidelines.html">Driving Guidelines</a></li>
                      <li><a href="home-driving-training.html">Car Driving Training</a></li>
                      <li><a href="home-driving-certificate.html">Home Driving Certificate</a>
                      </li>
                      <li><a href="home-external-driving.html">External Driving Training</a></li>
                    </ul>*/}
                  </li>
                  <li><NavLink to="/courses/ed-online">ED Online</NavLink></li>
                  <li><NavLink to="/courses">Courses</NavLink>
                    {/*<ul className="sub-menu"> className="menu-item-has-children"
                      <li><a href="course.html">Courses</a></li>
                      <li><a href="course-details.html">Course Details</a></li>
                    </ul> */}
                  </li>
                  <li><NavLink to="/pricing">Pricing</NavLink>
                   {/*  <ul className="sub-menu"> className="menu-item-has-children"
                      <li className="menu-item-has-children"><a href="#">Shop</a>
                        <ul className="sub-menu">
                          <li><a href="shop.html">Shop</a></li>
                          <li><a href="shop-details.html">Shop Details</a></li>
                          <li><a href="cart.html">Cart Page</a></li>
                          <li><a href="checkout.html">Checkout</a></li>
                          <li><a href="wishlist.html">Wishlist</a></li>
                        </ul>
                      </li>
                      <li><a href="service.html">Service</a></li>
                      <li><a href="service-details.html">Service Details</a></li>
                      <li><a href="team.html">Team</a></li>
                      <li><a href="team-details.html">Team Details</a></li>
                      <li><a href="project.html">Project</a></li>
                      <li><a href="project-details.html">Project Details</a></li>
                      <li><a href="pricing.html">Pricing</a></li>
                      <li><a href="faq.html">Faq Page</a></li>
                      <li><a href="error.html">Error Page</a></li>
                    </ul> */}
                  </li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink to="/blog">Blogs</NavLink></li>
                  <li><NavLink to="/faq">FAQ</NavLink></li>
                  {/*  <li className="menu-item-has-children"><a href="#">Blog</a>
                    <ul className="sub-menu">
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="blog-details.html">Blog Details</a></li>
                    </ul>
                  </li> <li><a href="contact.html">Contact</a></li>searchBoxToggler */}
                  
                </ul>
              </nav>
            </div>
            <div className="col-auto ms-auto  d-xl-block">
              <div className="header-button">
                <img src="assets/img/DM.png" alt="DMW logo" style={{width:'100px',height:'100px',objectFit:'contain'}}/>
                <NavLink to='https://bpds.thedatech.com/' target="__blank"><button type="button" className="icon-btn"><i className="fas fa-user-circle" /></button></NavLink> 
                <button type="button" className="icon-btn sideMenuToggler"><FcOvertime style={{fontSize:"24px"}}/>
                </button> <NavLink to="/contact" className="th-btn">Get Consulting<i className="fas fa-arrow-right ms-2" /></NavLink></div>
            </div>
            <button type="button" className="th-menu-toggle d-block d-lg-none" onClick={Menutoggle}><i className="far fa-bars" /></button>
          </div>
        </div>
      </div>
      {mobileopen && <div className="th-mobile-menu" style={{ display: mobileopen === false ? 'none' : 'block' }}>
        <ul>
          <li><NavLink to="/  " onClick={() => setMobileopen(false)}>Home</NavLink>
           {/* <ul className="sub-menu" className="menu-item-has-children">
              <li><a href="home-driving-school.html">Driving School</a></li>
              <li><a href="home-driving-courses.html">Driving Courses</a></li>
              <li><a href="home-driving-guidelines.html">Driving Guidelines</a></li>
              <li><a href="home-driving-training.html">Car Driving Training</a></li>
              <li><a href="home-driving-certificate.html">Home Driving Certificate</a></li>
              <li><a href="home-external-driving.html">External Driving Training</a></li>
            </ul> */}
          </li>
          <li><NavLink to="/Ed-online" onClick={() => setMobileopen(false)}>ED Online</NavLink></li>
          <li><NavLink to="/courses" onClick={() => setMobileopen(false)}>Courses</NavLink>
            {/*<ul className="sub-menu">
              <li><a href="course.html">Courses</a></li>
              <li><a href="course-details.html">Course Details</a></li>
            </ul> */}
          </li>
          <li><NavLink to="/pricing" onClick={() => setMobileopen(false)}>Pricing</NavLink>
            {/*<ul className="sub-menu">
              <li className="menu-item-has-children"><a href="#">Shop</a>
                <ul className="sub-menu">
                  <li><a href="shop.html">Shop</a></li>
                  <li><a href="shop-details.html">Shop Details</a></li>
                  <li><a href="cart.html">Cart Page</a></li>
                  <li><a href="checkout.html">Checkout</a></li>
                  <li><a href="wishlist.html">Wishlist</a></li>
                </ul> 
              </li>
              <li><a href="service.html">Service</a></li>
              <li><a href="service-details.html">Service Details</a></li>
              <li><a href="team.html">Team</a></li>
              <li><a href="team-details.html">Team Details</a></li>
              <li><a href="project.html">Project</a></li>
              <li><a href="project-details.html">Project Details</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="faq.html">Faq Page</a></li>
              <li><a href="error.html">Error Page</a></li>
            </ul>*/}
          </li>
          <li><NavLink to="/contact" onClick={() => setMobileopen(false)}>Contact</NavLink>
          </li>
          <li><NavLink to="/blog" onClick={() => setMobileopen(false)}>Blogs</NavLink>
          </li>
          <li><NavLink to="/faq" onClick={() => setMobileopen(false)}>FAQ</NavLink></li>
        </ul>
        <NavLink to="/contact" className="th-btn mx-5" onClick={() => setMobileopen(false)}>Get Consulting<i className="fas fa-arrow-right ms-2" /></NavLink>
      </div>}
    </div>
  </header>
</div>
    )
}
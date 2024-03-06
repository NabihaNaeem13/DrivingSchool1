import { Link } from "react-router-dom"
import { Breadbrum } from "../Components/AboutBread/Breadbrum"
import { ScrollTop } from "../Components/ScrollTop"
import { loadScripts,unloadScripts } from "../Components/LoadScript"
import { useEffect, useState } from "react"
import  City from '../Components/data/City';
import axios from "axios"

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
  { value: 'America/Los_Angeles', label: '6:30 pm to 7:00 pm' }
];

export const ContactPage=()=>{
  const [selectedTimeZone, setSelectedTimeZone] = useState('America/Los_Angeles');
  const [currentDate, setCurrentDate] = useState('');
  const [first_name,setfirst_name]=useState('');
  const [last_name,setlast_name]=useState('');
  const [email,setemail]=useState('');
  const [phone_no,setphone_no]=useState('');
  const [address,setaddress]=useState('');
  const [zip_code,setzip_code]=useState('');
  const [packages_locations,setpackages_locations]=useState('');
  const [permit_no,setpermit_no]=useState('');
  const [send_txt_msgs_to,setsend_txt_msgs_to]=useState('');
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState();
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

  const dateObj = new Date(currentDate);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('default', { month: 'short' });
  const formattedDate = `${day}-${month}`;
  const [startTime, endTime] = selectedTimeZone.split('to');
    const formattedTimeString = startTime.replace(/:00\s/g, " ");
    



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
    }catch(err){
      console.log('appointment book',err)
    }
  }

  useEffect(() => {
    const scripts = loadScripts();

    window.addEventListener('popstate', () => {
      // Handle popstate event (user navigates back or forward)
      unloadScripts(scripts);
      loadScripts();
    });

    return () => {
      // Cleanup the scripts when the component unmounts
      unloadScripts(scripts);
      window.removeEventListener('popstate', () => {
        unloadScripts(scripts);
        loadScripts();
      });
    };
  }, []);
    return(
        <>
       <Breadbrum title="Contact Us"/>
      <div className="space">
  <div className="container">
    <div className="row gy-4 justify-content-center">
      <div className="col-lg-4 col-md-6">
        <div className="contact-feature">
          <div className="contact-feature_icon">
            <img src="assets/img/icon/contact_feature_1.svg" alt="icon" />
          </div>
          <span className="contact-feature_subtitle">OUR OFFICE LOCATION</span>
          <h3 className="box-title">2010 Crow Canyon Pl Suite 100, San Ramon CA 945</h3>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="contact-feature bg-theme">
          <div className="contact-feature_icon">
            <img src="assets/img/icon/contact_feature_2.svg" alt="icon" />
          </div>
          <span className="contact-feature_subtitle">Have A Question?</span><h3 className="box-title"><Link to="tel:+1510331-2236">+1 (510) 331-2236</Link></h3></div></div>
      <div className="col-lg-4 col-md-6">
        <div className="contact-feature">
          <div className="contact-feature_icon">
            <img src="assets/img/icon/contact_feature_3.svg" alt="icon" />
          </div>
          <div className="contact-feature_content">
            <span className="contact-feature_subtitle">Email Us On</span>
            <h3 className="box-title"><Link to="mailto:info@baypassdrivingschool.com">info@baypassdrivingschool.com</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="space-bottom">
  <div className="container">
    <div className="bg-smoke rounded-20">
      <div className="row gx-0">
        <div className="col-xl-5">
          <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12613.969699337471!2d121.9726358!3d37.7784981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808ff3be722fd69d%3A0x2d791c2
94b299cb8!2sBay%20Pass%20Driving%20School%2C%20LLC.!5e0!3m2!1sen!2sus!4v1709191248243!5
m2!1sen!2sus" allowFullScreen loading="lazy" />
          </div>
        </div>
        <div className="col-xl-7">
          <div className="quote-form-box"><h3 className="form-title">Get A <span className="text-theme">Free</span> Quote</h3><p className="form-text">Car driver instructor must also have good communication skills patience confidence and teaching skills.</p>
          <form className="contact-form" onSubmit={(e)=>AppointmentBook(e,formattedDate,formattedTimeString,first_name,last_name,email,phone_no,address,states,selectedState,zip_code,permit_no,packages_locations,send_txt_msgs_to)}>
            <div className="row">
              <div className="form-group col-md-6">
                <input type="date" className="form-control" name="date" id="date" value={currentDate} onChange={(e)=>setCurrentDate(e.target.value)} required/>
                </div>
                <div className="form-group col-md-6">
                <select name="time" className="form-select" value={selectedTimeZone} onChange={(e)=>setSelectedTimeZone(e.target.value)} required>
                        <option selected="selected">Select Time</option>
                        {timeZones.map((timezone, index) => (
            <option key={`${timezone.value}-${index}`} >
              {timezone.label}
            </option>
          ))}
                        </select>
                  </div>
                  <div className="form-group col-md-6">
                <input type="text" className="form-control" name="first_name" placeholder="Your First Name" value={first_name} onChange={(e)=>setfirst_name(e.target.value)} required/>
                </div>
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" name="last_name"  placeholder="Your Last Name" value={last_name} onChange={(e)=>setlast_name(e.target.value)} required/>
                  </div>
                <div className="form-group col-md-6">
                  <input type="email" className="form-control" name="email" placeholder="Email Address" value={email} onChange={(e)=>setemail(e.target.value)} required/>
                  </div>
                  <div className="form-group col-md-6">
                <input type="tel" className="form-control" name="phone_no" placeholder="Your Phone Number" value={phone_no} onChange={(e)=>setphone_no(e.target.value)} required/>
                </div>
                <div className="form-group col-md-6">
                <select  name="State"  placeholder="State"
   value={selectedState}
  onChange={handleStateChange}
  className="form-select" required>
  <option value="" selected="selected">Select a State</option>
{City && City.map(({id,state})=>{
  return(
    <option key={id+state}>{state}</option>
  )
})}
</select>
                  </div>
                  <div className="form-group col-md-6">
                  <select name="city" className="form-select"    value={states}
  onChange={(e)=>setStates(e.target.value)} required>
                        <option selected="selected">Select City</option> 
                        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
                        </select>
                </div>   
                 
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" name="Zip" placeholder="Zip Code" value={zip_code} onChange={(e)=>setzip_code(e.target.value)} required/>
                  </div>
                  <div className="form-group col-md-6">
                <input type="text" className="form-control" name="address" placeholder="Your Address" value={address} onChange={(e)=>setaddress(e.target.value)} required/>
                </div>
                <div className="form-group col-md-6">
                <input type="text" className="form-control" name="permit_no" placeholder="Your Permit No" value={permit_no} onChange={(e)=>setpermit_no(e.target.value)} required/>
                </div>
                    <div className="form-group col-md-6">
                      <select name="packages_locations"  className="form-select" value={packages_locations} onChange={(e)=>setpackages_locations(e.target.value)} required>
                        <option selected="selected">Packages & Locations</option>
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

                          <div className="form-btn col-12">
                            <button type="submit" className="th-btn btn-fw">Submit Now</button>
                </div>
                </div>
                <p className="form-messages mb-0 mt-3" />
                </form>
                </div>
                </div></div></div></div></div>


        <ScrollTop/>
        </>
    )
}
import axios from "axios";
import { useEffect, useState } from "react";
import  City from '../data/City';

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

export const FAQ=()=>{

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
  const [open, setOpen] = useState(false);
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
    

    const handleClick = (e) => {
      e.preventDefault();
      if(currentDate!=="" && first_name!=="" && last_name!=="" && email!=="" && phone_no!=="" && states!==""){
        setOpen(true);
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



    return(
      <div id="faq-sec" data-bg-src="assets/img/bg/faq_bg_2.jpg">
  <div className="container pt-80 pb-80">
    <div className="row justify-content-center justify-content-lg-start">
    <div className="col-xl-7 text-center text-xl-start row justify-content-center">
    <div className="title-area mb-35"><span className="sub-title"><img src="assets/img/theme-img/title_shape_1_white.svg" alt="shape" />Schedule an Incoming Call/Text</span>
            <h2 className="sec-title text-white">Schedule an Incoming Call/Text</h2>
          </div>
          <div className="col-xl-6 mt-2 mb-2">
      <div className="accordion" id="faqAccordion">
            <div className="accordion-card style2 active" style={{height:'25rem'}}>
              <div className="accordion-header" id="collapse-item-1"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">Afraid of taking Driving tests? Our lessons will help you for sure !</button></div>
              <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p className="faq-text" style={{fontSize:'14px'}}>
                  The fear of taking a driving test is a common worry, and it’s essential to tackle these concerns to help individuals become safe and confident drivers. At Bay Pass Driving School, we have a highly skilled team of instructors who can help someone who’s extremely anxious about their driving test by understanding their fears and reducing them through intensive practice. We make an effort to keep your driving experience enjoyable.
                  </p>
                </div>
              </div>
            </div>
      </div>

      </div>
      <div className="col-xl-6 mt-2 mb-2">
      <div className="accordion" id="faqAccordion1">
            <div className="accordion-card style2 active" style={{height:'25rem'}}>
              <div className="accordion-header" id="collapse-item-2"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">Become a Driving Instructor</button></div>
              <div id="collapse-2" className="accordion-collapse collapse show" aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion1">
                <div className="accordion-body">
                  <p className="faq-text"  style={{fontSize:'14px'}}>To start your journey towards becoming a driving instructor, you’ll need to meet certain requirements set by the Department of Motor Vehicles (DMV). Initially, you need to:</p>
                  <ul><li className="faq-text mt-2"  style={{fontSize:'14px'}}>Be at least 21 years old.</li>
                  <li className="faq-text" style={{fontSize:'14px'}}>Hold a valid California driver’s license.</li>
                  </ul>
                  <p className="faq-text"  style={{fontSize:'14px'}}>Once you’ve met these prerequisites, you can kick start the process of becoming a driving instructor at our driving school.</p>
                </div>
              </div>
            </div>
            </div>
      </div>
      </div>
      
      <div className="col-xl-5">
        <div className="faq-form mx-auto">
          <h4 className="form-title text-center">Schedule An Appointment</h4>
          {open===true?  <form className="contact-form" onSubmit={(e)=>AppointmentBook(e,formattedDate,formattedTimeString,first_name,last_name,email,phone_no,address,states,selectedState,zip_code,permit_no,packages_locations,send_txt_msgs_to)}>
            <div className="row">     
                        <div className="form-group col-12"><textarea name="send_txt_msgs_to" cols={30} rows={4} className="form-control" placeholder="Your Message" value={send_txt_msgs_to} onChange={(e)=>setsend_txt_msgs_to(e.target.value)} required /></div>

                          <div className="form-btn col-12">
                            <button type="submit" className="th-btn btn-fw">Submit Now</button>
                </div>
                </div>
                <p className="form-messages mb-0 mt-3" />
                </form>:  <form className="contact-form" onSubmit={(e)=> handleClick(e)}>
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
                      <div className="form-btn col-12">
                            <button type="submit" className="th-btn btn-fw">Next</button>
                </div>
                </div>
                </form>}
        
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

/* <div className="col-xl-7 text-center text-xl-start">
        <div className="pe-xl-5 mb-40 mb-xl-5 pb-xl-4">
          <div className="title-area mb-35"><span className="sub-title"><img src="assets/img/theme-img/title_shape_1_white.svg" alt="shape" />FAQ</span>
            <h2 className="sec-title text-white">Frequently Asked Question</h2>
          </div>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-card style2 active">
              <div className="accordion-header" id="collapse-item-1"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">What documents can I use for REAL ID?</button></div>
              <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p className="faq-text">You can find a list of acceptable REAL ID documents online</p>
                </div>
              </div>
            </div>
            <div className="accordion-card style2">
              <div className="accordion-header" id="collapse-item-2"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">I uploaded REAL ID documents and chose an office, but now I want to visit a different office.</button></div>
              <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p className="faq-text">If you change the DMV office you want to visit, you won’t have the DMV Express Experience. You can check our website at dmv.ca.gov for more instructions.</p>
                </div>
              </div>
            </div>
            <div className="accordion-card style2">
              <div className="accordion-header" id="collapse-item-3"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">Do I still need to bring the documents I uploaded to DMV?</button></div>
              <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p className="faq-text">Yes, you must bring the original documents you uploaded when you visit the DMV to complete the REAL ID application.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
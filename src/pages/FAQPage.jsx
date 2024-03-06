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
export const FAQPage=()=>{
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
        <Breadbrum title="Frequently Asked Question"/>
      <div className="space space-extra-bottom">
  <div className="container"><div className="row">
    <div className="col-xl-7 mb-30">
      <div className="accordion-1 accordion" id="faqAccordion">
        <div className="accordion-card bg-smoke active">
          <div className="accordion-header" id="collapse-item-1">
            <button className="accordion-button bg-smoke" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">What documents can I use for REAL ID?</button>
            </div>
            <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                <p className="faq-text">You can find a list of acceptable REAL ID documents online.</p>
              </div>
            </div>
          </div>
          <div className="accordion-card bg-smoke">
            <div className="accordion-header" id="collapse-item-2">
              <button className="accordion-button bg-smoke collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">I uploaded REAL ID documents and chose an office, but now I want to visit a different office.</button>
            </div>
            <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                <p className="faq-text">If you change the DMV office you want to visit, you won’t have the DMV Express Experience. You can check our website at dmv.ca.gov for more instructions.</p>
              </div>
            </div>
          </div>
          <div className="accordion-card bg-smoke"><div className="accordion-header" id="collapse-item-3">
            <button className="accordion-button bg-smoke collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">Do I still need to bring the documents I uploaded to DMV?</button>
            </div>
            <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
              <div className="accordion-body"><p className="faq-text">Yes, you must bring the original documents you uploaded when you visit the DMV to complete the REAL ID application.</p>
              </div>
              </div>
              </div>
              <div className="accordion-card bg-smoke">
                <div className="accordion-header" id="collapse-item-4">
                  <button className="accordion-button bg-smoke collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">When will I find out if my documents are verified?</button></div>
                  <div id="collapse-4" className="accordion-collapse collapse" aria-labelledby="collapse-item-4" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                <p className="faq-text">It varies how long it takes to verify uploaded documents. Most are verified the same day, but it may take longer for documents submitted in the evenings, weekends, or holidays.</p></div>
                </div>
                </div>
                <div className="accordion-card bg-smoke">
                  <div className="accordion-header" id="collapse-item-5">
                    <button className="accordion-button bg-smoke collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">What if I don't want to wait for document verification before going to a field office?</button>
                    </div>
                    <div id="collapse-5" className="accordion-collapse collapse" aria-labelledby="collapse-item-5" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        <p className="faq-text">You don’t have to wait for verification if you don’t want to. However, going through the DMV Express Experience will ensure you have the right documents when you visit a DMV office, making your visit faster.</p>
                        </div>
                        </div>
                        </div>
                        <div className="accordion-card bg-smoke">
                          <div className="accordion-header" id="collapse-item-6">
                            <button className="accordion-button bg-smoke collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">Am I qualified to complete my registration renewal online?</button>
                            </div>
                            <div id="collapse-6" className="accordion-collapse collapse" aria-labelledby="collapse-item-6" data-bs-parent="#faqAccordion">
                              <div className="accordion-body">
                                <p className="faq-text">You are eligible for online renewal if:</p>
                                <p className="faq-text">You have internet access.</p>
                                <p className="faq-text">You possess a valid credit card, debit card, or checking account.</p>
                                <p className="faq-text">You are aware of the last 5 digits of your vehicle’s VIN (Vehicle Identification Number) or your vessel’s HIN (Hull Identification Number).</p>
                                <p className="faq-text">You have insurance for your vehicle, or you’re registering a vehicle that doesn’t require insurance, such as a trailer.</p>
                                <p className="faq-text">DMV has electronic smog certification information for your vehicle on record.</p>
                                <p className="faq-text">However, you cannot renew your registration online if you:</p>
                                <p className="faq-text">Lack a credit card, debit card, or checking account.</p>
                                <p className="faq-text">Don’t know your vehicle’s VIN or HIN.</p>
                                <p className="faq-text">Please note that although you can pay vehicle registration fees online, the registration process isn’t complete if your vehicle needs a smog certificate or proof of insurance.</p>
                                </div>
                                </div>
                                </div>
                                <div className="accordion-card bg-smoke">
                                  <div className="accordion-header" id="collapse-item-7">
                                    <button className="accordion-button bg-smoke collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">What should I do if I've already taken care of my parking citation payments?</button>
                                    </div>
                                    <div id="collapse-7" className="accordion-collapse collapse" aria-labelledby="collapse-item-7" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                        <p className="faq-text">Prior to renewing your registration online, it’s crucial to ensure that all parking tickets have been paid or resolved. If these parking citations are still indicated on the renewal notice received from the DMV, you’ll need to complete your renewal either by mail or in person at a DMV office. If you wish to dispute your parking ticket, you must address the matter with the court. Once the court has resolved your parking citation, you can submit the clearance paperwork along with your renewal notice through mail or at a DMV location.</p>
                                        </div>
                                        </div>
                                        </div>
                                        <div className="accordion-card bg-smoke">
                                  <div className="accordion-header" id="collapse-item-7">
                                    <button className="accordion-button bg-smoke collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">What should I do if I'm relocating to another state, but the vehicle registered to me will remain registered in California?</button>
                                    </div>
                                    <div id="collapse-7" className="accordion-collapse collapse" aria-labelledby="collapse-item-7" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                        <p className="faq-text">You must inform the DMV about your address change within 10 days of moving.</p>
                                        <p className="faq-text">You can easily update your</p>
                                        <p className="faq-text">address online to inform the DMV about your new residence or mailing address</p>
                                        <p className="faq-text">for your vehicle, vessel, driver’s license, or identification card records.</p>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        <div className="col-xl-5">
                                          <div className="sidebar-area faq-sidebar">
                                            <div className="widget widget_quote">
                                            <h3 className="widget_title">Schedule An Appointment</h3>
                                                                                                                                    <form className="widget-form" onSubmit={(e)=>AppointmentBook(e,formattedDate,formattedTimeString,first_name,last_name,email,phone_no,address,states,selectedState,zip_code,permit_no,packages_locations,send_txt_msgs_to)}>
                                                                                                                                        <div className="form-group">
                                                                                                                                            <input type="date" className="form-control" name="date"  value={currentDate} onChange={(e)=>setCurrentDate(e.target.value)} required/> 
                                                                                                                                            </div>
                                                                                                                                            <div className="form-group">
                                                                                                                                            <select name="time" className="form-select" value={selectedTimeZone} onChange={(e)=>setSelectedTimeZone(e.target.value)} required>
                        <option selected="selected">Select Time</option>
                        {timeZones.map((timezone, index) => (
            <option key={`${timezone.value}-${index}`} >
              {timezone.label}
            </option>
          ))}
                        </select> 
                                                                                                                                            <i className="far fa-clock" /></div>
                                                                                                                                            <div className="form-group">
                                                                                                                                            <input type="text" className="form-control" name="first_name" placeholder="Your First Name" value={first_name} onChange={(e)=>setfirst_name(e.target.value)} required/> 
                                                                                                                                            <i className="fal fa-user" /></div>
                                                                                                                                            <div className="form-group">
                                                                                                                                            <input type="text" className="form-control" name="last_name"  placeholder="Your Last Name" value={last_name} onChange={(e)=>setlast_name(e.target.value)} required/> 
                                                                                                                                            <i className="fal fa-user" /></div>
                                                                                                                                            <div className="form-group">
                                                                                                                                            <input type="email" className="form-control" name="email" placeholder="Email Address" value={email} onChange={(e)=>setemail(e.target.value)} required/> 
                                                                                                                                            <i className="fal fa-envelope" /></div>
                                                                                                                                                <div className="form-group">
                                                                                                                                                    <input type="tel" className="form-control" name="phone_no" placeholder="Your Phone Number" value={phone_no} onChange={(e)=>setphone_no(e.target.value)} required/><i className="fal fa-phone" /></div>
                                                                                                                                                    <div className="form-group col-md-12">
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
                  <div className="form-group col-md-12">
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
                                                                                                                                                  
                                                                                                                                                    
                                                                                                                                                            <div className="form-group">
                                                                                                                                            <input type="text" className="form-control" name="Zip" placeholder="Zip Code" value={zip_code} onChange={(e)=>setzip_code(e.target.value)} required /> 
                                                                                                                                            <i className="fas fa-map-pin" /></div>
                                                                                                                                            <div className="form-group">
                                                                                                                                                <input type="text" className="form-control" name="address" placeholder="Your Address" value={address} onChange={(e)=>setaddress(e.target.value)} required /> <i className="fas fa-map-marker-alt" />
                                                                                                                                                </div>
                                                                                                                                                <div className="form-group">
                                                                                                                                                <input type="text" className="form-control" name="permit_no" placeholder="Your Permit No" value={permit_no} onChange={(e)=>setpermit_no(e.target.value)} required/> <i className="fas fa-map-marker-alt" />
                                                                                                                                                </div>
                                                                                                                                                <div className="form-group">
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
                        <i className="fal fa-chevron-down" />
                        </div>
                                                <div className="form-group">
                                                    <textarea name="send_txt_msgs_to" cols={30} rows={3} className="form-control" placeholder="Your Message" value={send_txt_msgs_to} onChange={(e)=>setsend_txt_msgs_to(e.target.value)} required /> 
                                                <i className="fal fa-comment" />
                                                </div>
                                                <div className="form-btn">
                                                    <button type="submit" className="th-btn w-100">Schedule An Appointment<i className="fas fa-arrow-right ms-2" /></button>
                                                    </div>
                                                    <p className="form-messages mb-0 mt-3" />
                                                    </form>
                                            
                                                              </div></div></div></div></div></div>

        <ScrollTop/>
        </>
    )
}
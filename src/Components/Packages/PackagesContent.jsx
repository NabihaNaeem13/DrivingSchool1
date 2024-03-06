import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
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

export const PackagesContent=()=>{
    const [course,setcourse]=useState();
  const [selectPrice, setSelectPrice] = useState(0);
  const [selectHour, setSelectHour] = useState(0);
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
  const [quantity,setQuantity] = useState(1)
  const [filteredData,setFilteredData]=useState({});
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

  const incrementQuantity = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
      if (quantity > 0) {
          setQuantity(prevQuantity => prevQuantity - 1);
      }
  };

  const dateObj = new Date(currentDate);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('default', { month: 'short' });
  const formattedDate = `${day}-${month}`;
  const [startTime, endTime] = selectedTimeZone.split('to');
    const formattedTimeString = startTime.replace(/:00\s/g, " ");
    
    let {name}=useParams()


  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    const selectedCityObject = City.find(city => city.name === selectedCity);

    if (selectedCityObject) {
      setStates({ name: selectedCity, state: selectedCityObject.state });
    } else {
      setStates({ name: '', state: '' }); // handle the case when no city is selected
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
    }catch(err){
      console.log('appointment book',err)
    }
  }

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




  const [prices, setPrices] = useState([]);
  const [hour, setHour] = useState([]);

 useEffect(() => {
  const filterData = (data, slug) => {
    return data.filter(course => course.slug === slug);
};

  if (course && Array.isArray(course) && course.length > 0) {
    const filtered = filterData(course, name);
    setFilteredData(filtered[0]);
      // Extract hours and prices from the course data
      const extractedHours = course.map(({ hours }) => JSON.parse(hours)).flat();
      const extractedPrices = course.map(({ price }) => JSON.parse(price)).flat();

      // Set the state with extracted hours and prices
      setHour(extractedHours);
      setPrices(extractedPrices);

      // Set the default values for selectPrice and selectHour
      if (extractedPrices.length > 0 && extractedHours.length > 0) {
          setSelectPrice(extractedPrices[0]);
          setSelectHour(extractedHours[0]);
      }
  }
}, [course]);

const RedirectPageURL=async(selected_hour,quantity,course_id)=>{
  try{
     const res=await axios.post('https://bpds.thedatech.com/api/redirect-dashboard',{selected_hour,quantity,course_id})
     const redirectURL = res.data.redirect_url;
     window.open(redirectURL, '_blank');
     setQuantity('');
     setSelectHour(0);
     setSelectPrice(0);
    }catch(err){
    console.log('RedirectPageURL of err',err);
  }
}
    return(
        <section className="space-top space-extra-bottom">
  <div className="container">
    <div className="row">
        <div className="col-xxl-8 col-lg-8">
            <div className="blog-single mb-30">
                <div className="blog-img">
                    <img src="../../../assets/img/course/course_details.jpg" alt="course Image" />
                    </div>
                    <div className="blog-content">
                        <div className="title-wrap">
                            <h2 className="h3 page-title">{filteredData.title}</h2>
                            
                    </div>
                    <div  dangerouslySetInnerHTML={{__html:filteredData.description}}/>
                    <h6>Cover Area:</h6><p>{filteredData.area_covered}</p>
                                 <div className="course-feature-wrap mb-5">
                                    
                                                       
                                                                 
                                                                                </div>

                                  
                                                                                <div className="row mb-10">
                                                                                    
                                                                                                 
                                                                                                                    </div>
                                                                                                                    <div className="buy-area">
                                                                                                        <h4 className="buy-title">Buy Your Driving Lessons with Us!</h4>
                                                                                                         <div>
                                                                                                         <div className="form-group">
                                                                                                                                                        <select name="subject" id="subject" className="form-select" onChange={(e) => {
    const selectedValues = e.target.value.split(','); // Split the value by comma to get both price and hour
    setSelectPrice(selectedValues[0]); // Set the price
    setSelectHour(selectedValues[1]); // Set the hour
}}>
<option value disabled="disabled" selected="selected" hidden>Select Hours</option>
                                                                                                                                                            {hour && hour.map((hour, index) => (
        <option key={index} value={[prices[index],hour]}>{hour} Hours - ${prices[index]}</option>
      ))}
                                                                                                             </select> <i className="fal fa-chevron-down" /></div>
                                                                                                             <p>Quantity:</p>
                                                                                                          <div className="form-group d-flex justify-content-center">
          
          <button className="addbtnvalue1" onClick={decrementQuantity}>-</button>
            <input
                type="text"
                className="form-control form-controlinput"
                name="quantity"
                placeholder="0"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
            />
          <button className="addbtnvalue1" onClick={incrementQuantity}>+</button>

        </div>
        {selectHour!==0 && quantity!==0 && <><p className="text-white mb-0">{selectHour} Hours - ${selectPrice} X {quantity}</p>
        <p className="text-white">Total : $ {selectPrice*quantity}</p></>}
       
                                                                                                        <button type="submit" className="th-btn btn-small style3" onClick={()=>RedirectPageURL(selectHour,quantity,filteredData.id)}>${selectPrice} - BUY NOW</button>
                                                                                                         </div>
                                                                                                       
                                                                                               
                                                                                                        </div></div></div>
                                                                                                        </div>
                                                                                                        <div className="col-xxl-4 col-lg-4">
                                                                                                            <aside className="sidebar-area">
                                                                                                            <div className="widget widget_search">
                                                                                                                <form className="search-form">
                                                                                                                    <input type="text" placeholder="Enter Keyword" /> 
                                                                                                                    <button type="submit"><i className="far fa-search" /></button>
                                                                                                                    </form>
                                                                                                                    </div>
                                                                                                                   
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
                                                                                                                                                <input type="text" className="form-control" name="permit_no" placeholder="Your Permit No" value={permit_no} onChange={(e)=>setpermit_no(e.target.value)} required/> <i className="far fa-map" />
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
                                                    </div>
                                                             </aside></div></div></div>
</section>

    )
}
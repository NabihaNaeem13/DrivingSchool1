import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import PriceCard from "./PriceCard";

export const Packages=()=>{
  const [course,setcourse]=useState();
  const [selectPrice, setSelectPrice] = useState(0);
  const [selectHour, setSelectHour] = useState(0);




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
  if (course && Array.isArray(course) && course.length > 0) {
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

    return(
     <section className="space">
  <div className="container">
    <div className="title-area text-center">
      <span className="sub-title">
        <img src="assets/img/theme-img/title_shape_1.svg" alt="shape" />Pricing Plan</span>
      <h2 className="sec-title">Our Most Valuable Pricing Packages</h2>
    </div>
    <div className="row gy-4 justify-content-center">
      {course && course.map(({id,title,area_covered})=>{
        return(
          <PriceCard
          key={id}
          id={id}
          title={title}
          area_covered={area_covered}
          selectPrice={selectPrice}
          selectHour={selectHour}
          prices={prices}
          hour={hour}
          setSelectPrice={setSelectPrice}
          setSelectHour={setSelectHour}
      />
        )
      })}
    </div>
  </div>
</section>

    )
}
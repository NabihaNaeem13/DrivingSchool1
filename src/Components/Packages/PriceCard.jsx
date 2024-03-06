import React, { useState } from 'react';
import axios from 'axios'; // Import axios if not already imported

function PriceCard({ id, title, area_covered, selectPrice, selectHour,setSelectPrice,setSelectHour, prices, hour }) {
    const [quantity, setQuantity] = useState(1);
    
    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const RedirectPageURL = async (selected_hour,quantity,course_id) => {
        try {
            const res = await axios.post('https://bpds.thedatech.com/api/redirect-dashboard', {selected_hour,quantity,course_id});
            const redirectURL = res.data.redirect_url;
            window.open(redirectURL, '_blank');
            setQuantity(0);
        } catch (err) {
            console.log('Error in RedirectPageURL:', err);
        }
    };

    return (
        <div className="col-lg-4 col-md-6" key={id}>
        <div className="price-card">
          <h3 className="box-title">{title}</h3>
          <p className="price-card_text" >Cover area:{area_covered}</p> 
          <h4 className="price-card_price">
            <span className="currency">$</span>{selectPrice} <span className="duration"> / {selectHour} Hour</span></h4>
          <div className="price-card_content">
          <div className="checklist">
            <select  onChange={(e) => {
  const selectedValues = e.target.value.split(','); // Split the value by comma to get both price and hour
  setSelectPrice(selectedValues[0]); // Set the price
  setSelectHour(selectedValues[1]); // Set the hour
}}>
            {hour && hour.map((hour, index) => (
      <option key={index} value={[prices[index],hour]}>{hour} Hours - ${prices[index]}</option>
    ))}
              </select>
            </div>
            <p>Quantity:</p>
        <div className="form-group col-md-12 d-flex justify-content-center">
        <button className="addbtnvalue" onClick={decrementQuantity}>-</button>
          <input
              type="text"
              className="form-control form-controlinput"
              name="quantity"
              placeholder="0"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
          />
         <button className="addbtnvalue" onClick={incrementQuantity}>+</button>
      </div>
      {selectHour!==0 && quantity!==0 && <><p className="text-white mb-0">{selectHour} Hours - ${selectPrice} X {quantity}</p>
        <p className="text-white">Total : $ {selectPrice*quantity}</p></>}
            <button className="th-btn" onClick={()=>RedirectPageURL(selectHour,quantity,id)}>BUY NOW<i className="fas fa-arrow-right ms-2" /></button></div>
        </div>
      </div>
    );
}

export default PriceCard;



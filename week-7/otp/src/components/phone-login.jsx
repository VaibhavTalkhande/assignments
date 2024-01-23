import React from 'react'
import OtpInput from './OtpInput';
const PhoneOtpForm = () => {
    const [phoneNumber,SetPhoneNumber] = React.useState();
    const [showotp,SetshowOtp]=React.useState(false);
    const handlePhoneNumber= (e)=>{
        e.preventDefault();
        SetPhoneNumber(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(phoneNumber);
        const regex=/[^0-9]/g
        if(phoneNumber.length<10||regex.test(phoneNumber)){
            alert("invalid Phone number")
            return;
        }
        SetshowOtp(true);
    }
    const onOtpSubmit=(otp)=>{
        console.log("login successfull",otp)
    }
  return (
    <div>
        {!showotp? <form onSubmit ={handleSubmit}>
            <input 
                type='text'
                value={phoneNumber}
                onChange={handlePhoneNumber}
                placeholder='+91-99234XXXXXXX'
            />
            <button type='submit'>send Otp</button>
        </form>:<div>
            <p>Enter otp sent to {phoneNumber}</p>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>
        }
    </div>
  )
}

export default PhoneOtpForm

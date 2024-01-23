import { useState } from "react"
import React from 'react'


const OtpInput = ({ length=4, onOtpSubmit = () => {} }) => {
    const [otp,Setotp]= useState(new Array(length).fill(""));
    const inputRefs = React.useRef([]);
    console.log(otp);
    console.log(inputRefs);
    React.useEffect(()=>{
        if(inputRefs.current[0]){
            inputRefs.current[0].focus();
        }
    },[])
    const handleChange =(index,e)=>{
        const value= e.target.value;
        if(isNaN(value)) return; 
        const newOtp = [...otp];
        newOtp[index]=value.substring(value.length-1);
        Setotp(newOtp);
        const combinedOtp =newOtp.join("");
        if(combinedOtp.length===length) return onOtpSubmit(combinedOtp);
        console.log(combinedOtp)
        if(value && index<length-1 && inputRefs.current[index+1] ){
            inputRefs.current[otp.indexOf("",index+1)].focus();
        }
        
    }
    const handleKeyDown=(index,e)=>{
        if(
            e.key==="Backspace" &&
            !otp[index] && index>0 && inputRefs.current[index-1]
        ){
            inputRefs.current[index-1].focus();
        }
    }
    const handleClick =(index)=>{
        inputRefs.current[index].setSelectionRange(1,1);
        if(index>0 && !otp[index-1] ){
            inputRefs.current[otp.indexOf("")].focus();
        }
    }
  return (
    <div>
        {otp.map((value,index)=>{
            return(
                 <input 
                    key={index}
                    type="text"
                    ref={(input)=>(inputRefs.current[index]=input)}
                    value={value}
                    onClick={()=>handleClick(index)}
                    onChange={(e)=>handleChange(index,e)}
                    onKeyDown={(e)=> handleKeyDown(index,e)}
                    className='otpInput'
                 />
            )
        })}
    </div>
  )
}

export default OtpInput
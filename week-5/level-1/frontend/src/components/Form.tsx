/*
 - The Card must show a person's
    - Name
    - A short description
    - LinkedIn, Twitter and other Social Media Handle buttons
    - Interests Section
*/
import { useState } from "react";
type CardType ={
  name:string,
  description:string;
  socialMedia:{
    linkedin?:string;
    twitter?:string;
  }
  interests:string[],
}
const Form = () => {
  const [cardData,setcardData] = useState<CardType>();
  const [name,setname] = useState<string>("");
  const [desc,setdesc] = useState<string>("");
  const SubmitHandler = (e:MouseEvent)=>{
    e.preventDefault();


  }
  return (
    <>
      <div>form</div>
      <input type="text" placeholder="name" onChange={(e)=>{
      e.preventDefault();
     
       
      }/>
      <textarea />
      <input type="text" placeholder="LinkedIn" />
      <input type="text" placeholder="Twitter" />
      <button onClick={()=> SubmitHandler} 
    </>

  )
}

export default Form;
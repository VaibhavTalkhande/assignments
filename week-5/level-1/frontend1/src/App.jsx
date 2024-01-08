import { useEffect, useState } from 'react'
import './App.css'
import Card from './Card'
function App() {
  const [card, setCard] = useState();
  const [cards, setCards] = useState([]);
  const handleSubmit = (event)=>{
   event.preventDefault();
    const {name, description, linkedin, twitter, interests} = event.target;
    const newCard = {
      name: name.value,
      description: description.value,
      linkedin: linkedin.value,
      twitter: twitter.value,
      interests: interests.value,
    }
    setCard(newCard);
    postData(newCard);
    event.target.reset();

  }
  const postData = async (data) => {
    const response = await fetch('http://localhost:4000/api/card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),

    });
    const result = await response.json();
    console.log(result);
  }
  useEffect(()=>{
    const getData = async () => {
      const response = await fetch('http://localhost:4000/api/card');
      const data = await response.json();
      setCards(data);

    }
    getData();
  }
  ,[card]);

    
  return (
    <>
     <div className="container">
      <div className="leftside">
       <h1>Cards Generator</h1>
        <form
        onSubmit={handleSubmit}
        >
        <label htmlFor="name">Name :</label>
        <input type="text" id="name" name="name" placeholder='Name' />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" placeholder='I am a developer' />
        <label htmlFor="linkedin">LinkedIn</label>
        <input type="url" id="linkedin" name="linkedin" placeholder='https://www.linkedin.com/' />
        <label htmlFor="twitter">Twitter :</label>
        <input type="url" id="twitter" name="twitter" placeholder='https://www.twitter.com/' />
        <label htmlFor='interests'>Interest</label>

        <select id='interests' name='interests'>
          <option value=''>--Please choose an option--</option>
          <option value='Frontend'>Frontend</option>
          <option value='Backend'>Backend</option>
          <option value='Fullstack'>Fullstack</option>
          <option value='DevOps'>DevOps</option>
          <option value='QA'>QA</option>
          <option value='UX/UI'>UX/UI</option>
          <option value='Data Science'>Data Science</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      </div>
      <div className="rightside">
      <h2>Card</h2>
      <div style={{width:'100%',height:'100%', display:'flex', justifyItems:'legacy',justifyContent:'space-evenly',flexWrap:'wrap', gap:'20px'}}>
          {cards.map((card, index) => (
            <Card key={index} name={card.name} description={card.description} linkedin={card.linkedin} twitter={card.twitter} interests={card.interests} />

            
          ))}
      </div>
      </div>
      </div>
    </>
  )
}

export default App

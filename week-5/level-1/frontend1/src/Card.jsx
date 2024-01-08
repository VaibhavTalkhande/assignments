/* eslint-disable react/prop-types */
import './card.css'


const Card = (props) => {
    return (
        <>
        <div className="card" >
        <span className='cardname'><h3> </h3>{props.name}</span>
        <span className='cardDescription'><h3>Description : </h3>{props.description}</span>
        <span className='cardInterest'><h3>Interests : </h3>{props.interests}</span>
        <div className="social-media">
            <a href={props.linkedin}>
                <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="linkedin" />
            </a>
            <a href={props.twitter}>
                <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="twitter" />
            </a>
        </div>


        </div>
        </>
    )
    }




export default Card

   import "./ang.css"
   import image from "../../images/Angebote image/PizzaOffer.png"
   import { Link } from "react-router-dom"
const Ang = (props) => {
  
  return (
   <>
    <Link 
    to='/angDetails'
    >
     <div className={props.white?"pizza-card white":"pizza-card"}>
       <div className="inner">
         <img src={image} alt="" />
       </div>
       <div className="data">
           <h1 className="data-title">Party Pizza & Salat Angebot</h1>
           <h3>Nr.50</h3>
           <p>1 x Party Pizza 60x40cm nach Wunsch</p>
           <p>1 x gemtschter Salat</p>
           <p>1 x Flasche Cola 1 <s>L</s> </p>
           <span>34.<sup>00</sup> <s>CHF</s> </span>
         </div>
     </div>
     </Link>
   </>

  )
}

export default Ang
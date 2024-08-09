import toast, {Toaster} from "react-hot-toast";
import "./SecretCard.css";
import axios from "axios";

function SecretCard({ _id, title, description, createdAt, loadSecrets }) {
return (<div className="main">
    <div className="card-container"> 
    <h1 className="title"> {title} </h1>
    <div> 
    <span className="timing">  {createdAt}  </span>
       </div>

    <span className="description">{description}</span>
    

       </div>
       </div>


)
}


export default SecretCard

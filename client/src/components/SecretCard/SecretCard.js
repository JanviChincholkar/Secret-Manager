import toast, {Toaster} from "react-hot-toast";
import "./SecretCard.css";
import axios from "axios";

function SecretCard({ _id, title, description, createdAt, loadSecrets }) {
return (
    <div className=""> 
    <h1> {title} </h1>

    <span >{description}</span>
    
   <div> <span className="">
        {createdAt}
      </span> </div>
       </div>



)
}


export default SecretCard

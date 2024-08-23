import toast, {Toaster} from "react-hot-toast";
import "./SecretCard.css";
import axios from "axios";
import Imgdelete from './delete.png'

function SecretCard({ _id, title, description, createdAt, loadSecrets }) {

const deleteSecret = async () => {
  const response = await axios.delete(`${process.env.REACT_APP_API_URL}/secret/${_id}`)
  toast.success(response.data.message)
  loadSecrets()
}

return (
    <div className="card-container"> 
    <h1 className="title"> {title} </h1>
    <div>
    <span className="timing">  {createdAt}  </span>
   </div><br/> <br/>
    <span className="description">{description}</span>
    
<img src={Imgdelete} className="delete-img" onClick={deleteSecret}/>
<Toaster/>
       </div>
)
}


export default SecretCard

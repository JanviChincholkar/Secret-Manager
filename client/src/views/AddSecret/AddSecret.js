import axios from "axios"
import "./AddSecret.css"
import { useState, useEffect } from 'react'
import toast, {Toaster} from "react-hot-toast"
import ImgIcon from './../../views/icon.png'

function AddSecret() {

    const [user, setUser] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    
        if(currentUser){
          setUser(currentUser)
        }   
        if(!currentUser){
          window.location.href = '/login'
        }
      }, [])

      const addSecret = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/secret`, {
          title,
         description,
          user: user._id
        })
        toast.success(response.data.message)

        setTitle('')
        setDescription()

        setTimeout(() => {
          window.location.href = '/'
        }, 2000)
      }

  return (
    <div>
      <h1 className="auth-heading padding"> Add Your Text...</h1>

<form className="auth-form">
<img src={ImgIcon}  className='icon'/>
    <input 
    type="text"
    placeholder="Title"
    className="user-input" 
    value={title}
    onChange={(e) => setTitle(e.target.value)}/>

<input 
    type="text"
    placeholder="Description"
    className="user-input"
    value={description} 
    onChange={(e) => setDescription(e.target.value)}/>

    <button type="button" className="btn-auth" onClick={addSecret}> Add Text To My Secret List</button>
</form>
 </div>
  )
}

export default AddSecret

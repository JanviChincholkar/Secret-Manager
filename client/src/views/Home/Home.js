import React, { useEffect, useState } from 'react'
import"./Home.css"
import toast, {Toaster} from 'react-hot-toast'
import axios from 'axios'
import SecretCard from '../../components/SecretCard/SecretCard'
import ImgAdd from "./add.png"
import { Link } from 'react-router-dom'

function Home() {
  const [user, setUser] = useState('')
  const [secrets, setSecrets] = useState([])

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    if(currentUser){
      setUser(currentUser)
    }

    if(!currentUser){
      window.location.href = '/login'
    }
  }, [])

  const loadSecrets = async () => {
    if(!user._id){
      return
  }

  const response = await axios.get(`${process.env.REACT_APP_API_URL}/secrets?userId=${user._id}`)
  const allSecrets = response.data.data
    toast.dismiss()

    setSecrets(allSecrets)
  }
  useEffect(( )=> {
    loadSecrets()
  })

  return (
    <div>
     <h1 className='home-greeting'>Hello {user.fullName}!</h1>
    <h2 className='home-heading'> Put Your Personalize Information Here 🤫</h2>

    <span className='home-logout' onClick={() => {
        localStorage.clear()
        toast.success('Logged out successfully')

        setTimeout(()=>{
          window.location.href = '/login'
        }, 3000)
      }}>
        Logout
      </span>
{
  secrets.map((secret) => {
    const  { _id, title, description, createdAt, loadSecrets } = secret  

return (<SecretCard
              key={_id}
              _id={_id}
              title={title}
              description={description}
              createdAt={createdAt}
              loadSecrets={loadSecrets} />)
    })
}
<Link to='/add-secret'>
<img src={ImgAdd} alt='Add Text' className='add-text'/>
</Link>
<Toaster/>
    </div>
  )
}

export default Home

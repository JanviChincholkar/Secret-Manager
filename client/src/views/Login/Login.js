import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'
import ImgIcon from './../../views/icon.png'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginNow = async() => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
      email: email,
      password: password
    })
    if(response.data.success){
      toast.success(response.data.message)

      localStorage.setItem('currentUser', JSON.stringify(response.data.data))

     toast.loading('Redirecting to dashboard...')

     setTimeout(()=>{
       window.location.href = '/'
     }, 3000)
    }else{
      toast.error(response.data.message)
    }
  }

  return (
    <div>
      <h1 className='auth-heading'>User Login !</h1>


      <form className='auth-form'>
      <img src={ImgIcon}  className='icon'/>

        <input
          type='email'
          placeholder='Email'
          className='user-input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />

        <input
          type='password'
          placeholder='Password'
          className='user-input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

        <button
          type='button'
          onClick={loginNow}
          className='btn-auth'>
          Login Now
        </button>
      </form>

      <Link to='/signup' className='auth-link'>Don't have an account? Signup</Link>

      <Toaster />
    </div>
  )
}

export default Login
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Navbar from './components/Navbar';
const App = () => {

  const [message , setMessage] = useState(null);
  useEffect(()=> {
    const fetchData = async()=>{
      const res = await axios.get('http://localhost:8000/',{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setMessage(res.data.message);
    }
    fetchData();
  }, [message])
  return (
    <div>
      <Navbar />
      {message && <div>This is the message:{" "}{message}</div>}
      <Signup />
      {/* <Login /> */}
    </div>
  )
}

export default App
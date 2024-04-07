import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Join() {

  const navigate = useNavigate()
  const [userName,setUserName] = useState("")
  console.log(userName);


  const goToChat = () =>{
    if(userName){
      navigate('/chat',{state:userName})
    }
    else{
      alert("Enter Your Username")
    }
  }

  return (
    <>
        <div style={{height:'130vh',backgroundColor:""}} className='d-flex justify-content-center align-items-center'>
            <div className='d-flex w-75 justify-content-center align-items-center'>
                <img width={'80%'} className='img-fluid' src="https://herobot.app/wp-content/uploads/2022/11/11-Reasons-Why-A-Chat-Application-Is-Great-For-Business_1.jpg" alt="" />
                
                <div className='ms-5 ' >
                <h1 className='hh1'>RanChat</h1>
                    <input type="text" onChange={(e)=>setUserName(e.target.value)} className='form-control' placeholder='Enter your Username'/>
                    <button onClick={goToChat} className="btn btn-success mt-2 w-100">Start Chat</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Join
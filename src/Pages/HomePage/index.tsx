import React from 'react';
import { useNavigate } from "react-router-dom";
import "./HomePage.css"


const Home: React.FC = () => {
 
  const navigate =useNavigate();

  const handleStart =()=>{
    navigate("/login")
  }

  return (
 
    <div className='main'>
      <div className='welcomeTitle'> Welcome to Quiz </div>
      <div className='btnDiv'><button  className='btn' onClick={handleStart}>Start Quiz</button></div>
    
    
    </div>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import {getUser} from "../../services/users.service"
import { Link, useNavigate } from 'react-router-dom'
function homePage() {
    const navigate = useNavigate()
    const [userData,setUserData]=useState([])
   const handleClick = ()=>{
        const removeToken = localStorage.removeItem("token");
        return removeToken
    }
    useEffect(()=>{
        const getUserData = getUser();
        console.log("getUserData-->",getUserData);
        getUserData.then((value)=>{
           if(value?.data){
            setUserData(value?.data);
           }
        })
        const token = localStorage.getItem('token')
        if(!token){
            navigate("/")
        }
    },[])
  return (
    <>
    <button onClick = {handleClick}><Link to="/">LOG OUT</Link></button>
    <div>
        Hello ReqRes User!
    </div>
    <div>
    {
    userData.length > 0 && userData.map((item,index)=>{
        return (
            <p>{item.first_name}</p>
        )
    })
    }
    </div>
    </>
  )
}

export default homePage

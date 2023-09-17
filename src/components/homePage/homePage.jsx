import React, { useContext, useEffect, useState } from 'react'
import {getUser} from "../../services/users.service"
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../context/auth.context';
import "./homepage.css"
function homePage() {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    const [userData,setUserData]=useState([])
    useEffect(()=>{
        const getUserData = getUser();
        console.log("getUserData-->",getUserData);
        getUserData.then((value)=>{
           if(value?.data){
            setUserData(value?.data);
           }
        })
    },[])
  return (
    <>
    <div className='header'>
        Hello ReqRes User!
    </div>
    <button onClick = {logOut} className='logout'>LOG OUT</button>
    <ul className='allignmant'>
    {
    userData.length > 0 && userData.map((item,index)=>{
        return (
            <li className='card'> 
                <img src = {item.avatar} alt = {item.first_name} className='image'/>
                <div className="user">
                    <p className='name'>{item.first_name}</p>
                    <p className='email'>{item.email}</p>
                </div>
            </li>
        )
    })
    }
    </ul>
    </>
  )
}

export default homePage

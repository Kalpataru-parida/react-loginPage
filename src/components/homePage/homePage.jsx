import React, { useContext, useEffect, useState } from 'react'
import {getUser} from "../../services/users.service"
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../context/auth.context';
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
    <button onClick = {logOut}>LOG OUT</button>
    <div>
        Hello ReqRes User!
    </div>
    <div>
    {
    userData.length > 0 && userData.map((item,index)=>{
        return (
            <p>name: {item.first_name}</p>
        )
    })
    }
    </div>
    </>
  )
}

export default homePage

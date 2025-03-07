import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/auth';
import Spinner from '../Pages/Spinner';
import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const [ok,setOk] = useState(false);
    const [auth] = useAuth();

    useEffect(()=>{
        const checkAuth = async()=>{
            try {
            let res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/user-auth`,{
                method:"GET",
                headers:{
                    Authorization:auth?.token,
                },
            })
            //res = await JSON.parse(res);
            if(res.ok)
            {
                setOk(true);
            }
            else{
                setOk(false);
                return;
            }
        } catch (error) {
              console.log("error in private route",error);
              setOk(false);
        }
        }
        if(auth?.token) checkAuth();
    },[auth?.token])
  return ok?<Outlet />:<Spinner path="" />
}

export default PrivateRoute

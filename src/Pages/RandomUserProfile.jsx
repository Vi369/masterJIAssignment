import { useEffect, useState } from 'react'
import axios from 'axios';
import { useBeforeUnload } from 'react-router-dom';

function RandomUserProfile() {
    const [user, setUser] = useState(null);
    const [refresh, setRefresh] = useState(false);

    async function fetchRandomUser(){
        try {
            const response = await axios.get(`https://api.freeapi.app/api/v1/public/randomusers/user/random`)
            setUser(response.data.data)
            console.log(response.data.data)
        } catch (error) {
            console.log(error.message);
        }
    }

    // toggle the refresh
    function handleRefresh(){
        setRefresh((prev)=> !prev);
    }

    useEffect(()=>{
        fetchRandomUser();
    }, [refresh]) 
  return (
    <div>
        
    </div>
  )
}

export default RandomUserProfile
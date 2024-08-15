import {useState, useEffect} from 'react'
import axios from 'axios';

function CatsListing() {
    const [catsData, setCatsData] = useState(null);

    async function getCatsData() {
        try {
            const response = await axios.get('https://api.freeapi.app/api/v1/public/cats?page=1&limit=4')
            setCatsData(response.data?.data)
            console.log(response.data.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=>{
        getCatsData();
    },[])
  return (
    <div>CatsListing</div>
  )
}

export default CatsListing
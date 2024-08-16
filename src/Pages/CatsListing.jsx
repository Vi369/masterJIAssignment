import {useState, useEffect} from 'react'
import axios from 'axios';
import CatsCard from '../Components/CatsCard.jsx';
import chaiLogo from '../assets/Logo/chaiLogo.png';

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

    <main className='bg-cat p-2 h-screen w-screen'>
        <header className='mb-5 relative'> 
            <img src={chaiLogo} alt="logo" className='absolute top-1 right-64' />
        </header>
        {/* heading */}
        <h1 className='text-4xl text-white ml-10 mt-5'>cats around us</h1>
        <div className='flex flex-row gap-5 m-12'>
            {catsData?.data.map((data,index)=>{
                return <CatsCard
                key={index}
                imgSrc = {data.image}
                catName = {data.name}
                description = {data.description}
                origin = {data.origin}
                temperament = {data.temperament}
                life_span = {data.life_span}
                knowMore = {data.wikipedia_url}
                />
            })}
        </div>
    </main>
  )
}

export default CatsListing
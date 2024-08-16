import { useEffect, useState } from 'react'
import axios from 'axios';
import logo from '../assets/Logo/chaiLogo.png'
import { IoMdRefresh } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { TbCopyright } from "react-icons/tb";


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

    // get country flag
    // async function getFlagIcon(countryName) {
    //     try {
    //         const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
            
    //         return response.data.data[0].flags.png; // Returns the PNG URL of the flag
    //     } catch (error) {
    //         console.error("Error fetching the flag:", error);
    //         return null;
    //     }
    // }

    // const flagicon = getFlagIcon(user?.location?.country)

    const nationality = user?.nat;
    const profileImage = user?.picture?.medium;
    const firstName = user?.name?.first;
    const lastName = user?.name?.last;
    const title = user?.name?.title;
    const username = user?.login?.username;
    const registered = user?.registered;

    useEffect(()=>{
        fetchRandomUser();
    }, [refresh]) 
  return (
    <div className='bg-black flex justify-center items-center h-screen w-screen'>
         <div className="bg-[#B6B3F3] shadow-lg rounded-lg w-full max-w-md p-6">
            {/* Section 1: Title and Refresh button */}
            <div className="flex items-center justify-between mb-4">
                <FaArrowLeftLong />
                <h2 className="text-lg font-semibold">Profile Overview</h2>
                <button onClick={()=> handleRefresh}><IoMdRefresh className='text-lg'/></button>
            </div>

            {/* Section 2: Profile Photo, Name, and Username */}
            <div className="flex items-center justify-center flex-col mb-4">
                <img src={profileImage} alt="Profile Photo" className="w-16 h-16 rounded-full mr-4" /> <span>{title}</span>
                <div>
                    <h3 className="text-xl font-semibold">{firstName} {lastName}</h3>
                    <p className="text-gray-600">{username}</p>
                </div>
            </div>

            {/* Section 3: Location and Call Time */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <p className="text-gray-800 font-semibold"><FaLocationDot /></p>
                </div>
                <div>
                    <p className="text-gray-800 font-semibold"></p>
                </div>
            </div>

            {/* Section 4: Additional Information */}
            <div className="flex flex-row">
                <div>
                    <p><span >City:</span> New York</p>
                    <p><span >Date of Birth:</span> January 1, 1990</p>
                    <p><span >Timezone:</span> GMT-5</p>
                </div>
                <div>
                <p > Nationality:</p>
                <span>{nationality}</span>
                
                </div>
            </div>

            {/* Section 5: Footer with Copyright and Logo */}
            <div className=" relative text-gray-600 text-sm mt-4">
                <span className=''><TbCopyright /> chai Aur code</span>
                <img src={logo} alt="Logo" className="w-8 h-8 absolute bottom-2 right-10" />
            </div>
        </div>
    </div>
  )
}

export default RandomUserProfile
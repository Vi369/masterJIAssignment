import {useEffect, useState} from 'react'
import axios from 'axios'
import profileImage from '../assets/jokesTweet/profile.png'
import { BsPatchCheckFill } from "react-icons/bs";
import { GoArrowLeft } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { RiShare2Line } from "react-icons/ri";
import { FaRegBookmark } from 'react-icons/fa';
import {format} from 'date-fns'

function RandomJokesTweet() {
    const [joke, setJoke] = useState(null);

    // date and time 
    const now = new Date()
    const time = format(now, "hh:mm a")
    const date = format(now, "MMM dd, yyyy")
    async function getRandomJokesTweet(){
        try {
            const response = await axios.get('https://api.freeapi.app/api/v1/public/randomjokes/joke/random');
            setJoke(response.data?.data);
            // console.log(response.data.data);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(()=>{
        getRandomJokesTweet();
    },[])
  return (
    <div className='bg-rm-joke h-screen w-screen flex items-center justify-center'>
        <div className="bg-black border text-slate-500 border-gray-300 rounded-lg shadow-md max-w-lg w-full p-4">
            <div>
            <GoArrowLeft className='text-2xl m-2 inline-block text-white'/>
            <span className='text-xl text-white font-bold m-4 p-2'>Post</span>
            </div>
            <div className="flex items-center">
            <img
                src={profileImage}
                alt="Elon Musk"
                className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex flex-col">
                <div className="font-semibold text-white">Elon Musk <BsPatchCheckFill className='text-blue-500 inline-block' /></div>
                <span>@elonmusk</span>
            </div>
            </div>
            <p className="mt-3 text-white p-2 tracking-wide">
            {joke?.content}
            </p>
            {/* time and date */}
            <div >
                <span className="">{time} </span>
                <span className="">{date} </span>
                <span className=""><span className='text-white'>20M</span> Views</span>
            </div>
            <div className="flex justify-between mt-4 border-t-2 border-b-2 p-2 border-slate-500">
            <span className="cursor-pointer"><BiMessageRounded className="inline-block text-xl" />4.9k</span>
            <span className="cursor-pointer"><AiOutlineRetweet className="inline-block text-xl" />5.3k</span>
            <span className="cursor-pointer"><CiHeart  className="inline-block text-xl" />59k</span>
            <span className="cursor-pointer"><FaRegBookmark  className="inline-block text-xl" />1.1k</span>
            <span className="cursor-pointer"><RiShare2Line className='inline-block' /></span>
            </div>
        </div>
    </div>
  )
}

export default RandomJokesTweet
import {useEffect, useState} from 'react'
import axios from 'axios'
function RandomJokesTweet() {
    const [joke, setJoke] = useState(null);

    async function getRandomJokesTweet(){
        try {
            const response = await axios.get('https://api.freeapi.app/api/v1/public/randomjokes/joke/random');
            setJoke(response.data?.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(()=>{
        getRandomJokesTweet();
    },[])
  return (
    <div>
        <p>{joke.content}</p>
    </div>
  )
}

export default RandomJokesTweet
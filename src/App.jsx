import './App.css'
import { Routes, Route } from 'react-router-dom'
import RandomUserProfile from './Pages/RandomUserProfile.jsx'
import RandomJokesTweet from './Pages/RandomJokesTweet.jsx'
import CatsListing from './Pages/CatsListing.jsx'
import Notfound from './Pages/NotFoundPage.jsx'
function App() {

  return (
    <>
        <Routes>
            <Route path='/' element = {<RandomUserProfile />} />
            <Route path='/random-user' element = {<RandomUserProfile />} />
            <Route path='/random-jokes' element = {<RandomJokesTweet />} />
            <Route path='/cats-listing' element = {<CatsListing />} />
            <Route path='*' element={<Notfound />} />
        </Routes>
    </>
  )
}

export default App

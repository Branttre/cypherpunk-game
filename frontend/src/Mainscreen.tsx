import { useState } from 'react'
import './App.css'
import GameScreen from './assets/components/GameScreen'
import Script from './assets/components/Script'
import { useContext } from 'react'
import { UserContext } from './App'
import { Image } from 'react-bootstrap'


export default function Mainscreen() {
  const [count, setCount] = useState(0)
  const {user}:any = useContext(UserContext)


  return (
    <>
    <Image src={user.profile_image} alt='profile pic' style={{right:"2vw",top:'1vh',zIndex:'3',position:'absolute', borderRadius: '50%', height: '5vh', width: '5vh', border: '1px solid #00ffff'}}/> 
    <div style={{position:'absolute',textAlign:'left'}}> 
      <Script/> 
    </div>
    <div>
      <GameScreen/>
    </div>
    </>
  )
}
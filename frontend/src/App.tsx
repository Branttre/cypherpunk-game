import { useState, useEffect, createContext } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { currUser } from './utilities';
import { getToken } from './assets/components/CSRF';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import "bootstrap/dist/css/bootstrap.min.css";
import { logOut } from './utilities';
import {  Hidden } from '@mui/material';
import { AppBar } from './assets/components/AppBar';
//import ResponsiveAppBar from './assets/components/AppBar';

export const UserContext = createContext(null)


function App() {
  const [user, setUser] = useState("")
  const [level,setLevel] = useState(0)
  const [solved,setSolved] = useState('false')
  //const [code,setCode] = useState("")

  getToken()
  useEffect(() => {
    const getCurrUser = async () => {
      setUser(await currUser());
      console.log(user)
    };
    getCurrUser();
  }, []);
    useEffect(() => {
      setLevel(user.level)
      console.log("setlevel level is" + level)
    })

  return (
      <div>
        <div style={{height:'5.5vh'}}>
          <AppBar/>
        </div>
        {/*<ResponsiveAppBar/>
        {/* <Nav style={{width:'10%'}} variant='dark'>
                <>
                <NavDropdown title={<img src={user.profile_image} alt="profile" style={{border: '2px solid white',width: '50px', height: '50px', borderRadius: '25px', overflow: "hidden"}}/>} id="navbarScrollingDropdown">
            <NavDropdown.Item style={{backgroundColor:'white', zIndex:"5"}}href="/profile/">
                My Profile
              </NavDropdown.Item>
            <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={logOut}>
                Log Out
              </NavDropdown.Item>
              </NavDropdown>
                </>
            </Nav> */}


      <UserContext.Provider value = {{user, setUser, level, setLevel, solved, setSolved,}}>
          <Outlet/>
      </UserContext.Provider>
      </div>

  )
}

export default App



// P1                                                     P2
//                                       *(assign string to variable x)
//                                   (variable)        (string)
//                                       x =       "we will start easy"
// 
//                                          *print "we will start easy"
// 
// y = "oh no im losing"
//
//

//                                        "we will start easy oh no im losing"

//print(x+y) 
//
// 
//
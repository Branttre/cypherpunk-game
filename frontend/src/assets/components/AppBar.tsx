//import React from "react";
import { BiBookContent } from "react-icons/bi";
import Popup from "reactjs-popup";
import './MenuButton.css'
import { Link } from "react-router-dom";
//import './test.css'
import { logOut } from "../../utilities";
//

const contentStyle = {
  maxWidth: "600px",
  width: "90%",
  // height: "2vh"
};


const handleSubmit = async (event:any) => {
  event.preventDefault();
  logOut()
  window.location.href = '../'

};

export const AppBar = () => (
  <>
  <img style = {{height:'35px',width:'45px',position:'absolute',zIndex:'5',left:'1vw',top:'2vh'}}src = "https://github.com/mikejenkz/DesertSoap/blob/main/Picture1.jpg?raw=true"/>
  <Popup
    trigger={<button className="button"> Menu </button>}
    modal
    contentStyle={contentStyle}
  >
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> CYPHERPUNK </div>
        <div className="actions">
          {/* <Link to = '/gamescreen/'> <button className='button'>New Game</button> </Link> */}
          <Link to = '/gamescreen/' > <button className='button'>Play</button> </Link>
         <Link to = '../profile/'> <button className='button'>My Profile</button> </Link>
         <button onClick = {handleSubmit} className='button'>Log Out</button>
        </div>
      </div>
    )}
  </Popup>
  <Popup
  trigger={<BiBookContent style={{cursor: 'pointer', backgroundColor:"white"}}/>}
   modal
   contentStyle={contentStyle}
 >
   {close => (
     <div className="modal">
       <a className="close" onClick={close}>
         &times;
       </a>
       <div className="header"> GuideBook </div>
          <Popup
          trigger={<button className="button"> Level 1 </button>}
          position="bottom center"
          nested
          modal
        >
          <span> First Level Content </span>
        </Popup>
        <Popup
          trigger={<button className="button"> Level 2 </button>}
          position="bottom center"
          nested
          modal
        >
          <span style={{fontSize:'20px'}}>Declare JavaScript Variables <br/><br/>
In computer science, data is anything that is meaningful to the computer. JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object.<br/>
<br/>
For example, computers distinguish between numbers, such as the number 12, and strings, such as "12", "dog", or "123 cats", which are collections of characters. Computers can perform mathematical operations on a number, but not on a string.
<br/>
<br/>
Variables allow computers to store and manipulate data in a dynamic fashion. They do this by using a "label" to point to the data rather than using the data itself. Any of the eight data types may be stored in a variable.
<br/><br/>
Variables are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the data we want to refer to. Computer variables differ from mathematical variables in that they can store different values at different times.
<br/><br/>
We tell JavaScript to create or declare a variable by putting the keyword var in front of it, like so:
<br/><br/>
var ourName;
creates a variable called ourName. In JavaScript we end statements with semicolons. Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.
<br/><br/>
Use the var keyword to create a variable called myName.
<br/><br/>
Hint
<br/><br/>
Look at the ourName example above if you get stuck. </span>
        </Popup>
        <Popup
          trigger={<button className="button"> Level 3 </button>}
          position="bottom center"
          nested
          modal
        >
          <span> Third Level Content </span>
        </Popup>
     </div>
   )}
      </Popup>
      </>
);

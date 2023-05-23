import pic1 from "../resources/streetlamp.png"
import { useContext, useState, useEffect } from "react"
import { UserContext } from "../../App"
import { textFieldClasses } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import axios from "axios";
import React from 'react';
import Typewriter from "typewriter-effect";
import { currUser } from "../../utilities";
import { EditRoadOutlined } from "@mui/icons-material";
import pic2 from "../resources/Cyberpunk Backgrounds/Apartment2.png";
import pic3 from "../resources/Cyberpunk Backgrounds/Bar1.png";

// let bgpic =pic1;


export default function Script() {
    const [disabled, setDisabled] = useState(false)

    const menu = [
        //Level 0
        ["The year is 2148, the technology meant to send mankind into its golden age instead created\
         the world you see now, and in this world, code is all that \
        matters. Those who know how to code control the security forces,\
        the money, the food production plants--the entire world."],
        //Level 1
        ["A faction known as shadow-coders controls everything, \
        you are not sure how many times you have tried to stop them. \
        The shadow-coders have caught you in every attempt you have made in the past, \
        and each time given you a fate worse than death: \
        technical memory wipe. But you must try again.."],
        //Level 2
        ["In order to survive in this world, you have to re-learn the most fundamental coding skills, \
        starting with strings. Strings are how text, words, and sentences are represented and controlled in \
        code. return() allows you to project your code into the physical world. Write your code in the terminal \
        and when you are done, run your program.", " ", "Example: return('this text in quotations is a string, \
        and it will be printed to the physical world')"],
        //Level 3, Problem 1: "PROBLEM ONE Problem sets: intro to string data type, defining strings, printing \
        //strings. Tutorial Problem 1: 
        ["Write a program to say 'Hello World!' and return it to the physical world.\n"],
        //As you continue to re-learn to code, Your AI, Nova, will store reference material in your datapad.\
        //Click the datapad icon at the top of the screen to review past and present material."],

        //Level 4
        ['You have sent a message out to the entire world, but you receive no response. You have a sense that you \
        are reaching out to someone, but cannot place who--you have operated alone for as long as you can remember.\
        Either way, it does not matter now. All that matters is re-learning to code. Survival in this world depends\
        on it.'],
        //Level 5
        ['It is time to leave this desolate street, where the shadow coders drop off their technical-memory-wiped prey.\
        Many who are dropped here dont make it off this street, they succumb to the cold depths of their new reality.\
        Not you though. You are going to leave. You think back to easier times and feel yourself relax. You are going to leave..'],
        //Level 6 --change picture--
        ['You wake up and find yourself in an apartment. As you take in your surroundings you realize someone must have \
        brought you in from the street. You receive a message through your implants--through which you learn an AI,\
        artificial intelligence, named Nova, saved you. She seems to be familiar with you, but you do not\
        recognize her. Nova: "I recognized your digital signature on your program. Im sure you have questions,\
        but lets verify some information first" \n\n\
        Use your terminal to respond by assigning a string or integer as appropriate to each variable.'],
        //Level 7
        ['Your Cypherpunk journey has come to an end. In order to continue, please send satoshis to\
        the following address: "bc1qstj0usa70zt084n04dmmf5r8yhlqzzjzpvcu8y"'],
        ['yoooooo'],
        ]
    
    const {level}:any = useContext(UserContext)
    const {setLevel}:any = useContext(UserContext)
    const {user}:any = useContext(UserContext)
    const {setUser}:any = useContext(UserContext)
    const {solved}:any = useContext(UserContext)
    const {setSolved}:any = useContext(UserContext)


    //const [currLevel, setCurrLevel] = useState(level)
    //console.log(user.level + "this is user level")
    // console.log(menu[1])
    
    // console.log(level)
    // console.log(menu[0][level])
    

    // if (level == undefined) {
    //     setLevel(0)
    //     currlevel = level
    //     console.log
    // }
    let bgpic = "";
    if (user.firstname == undefined) {
        bgpic = ""
    }
    else if (level == 6) {
        bgpic = pic2;
    }
    else if (level == 7) {
        bgpic = pic3;
    }
    else if(level >= 0 ) {
        bgpic = pic1
    }
    // else {
    //     bgpic = pic1;
    // }


    
    async function clickLeft() {
        console.log('yoo')
        if (level > 0) { 
        let response = await axios.post('../minuslevel/',level)
        console.log(response.data.success)
        window.location.reload()
        } else if (level === 0) {
            setDisabled(true)
        }
    }

    //

    async function clickRight() {
        if (level == 0) {
            console.log('yooplus')
            let response = await axios.post('../pluslevel/',level)
            console.log(response.data.success)
            setDisabled(false)
            window.location.reload()
        }
        
        else if (level % 3 != 0 && level != 7) { 
            console.log('yooplus')
            let response = await axios.post('../pluslevel/',level)
            console.log(response.data.success)
            setDisabled(false)     
        
            window.location.reload()
        }
        else if (level % 3 == 0 && solved == true) { 
            console.log('yooplus')
            let response = await axios.post('../pluslevel/',level)
            console.log(response.data.success)
            setDisabled(false)     
            setSolved(false)
            window.location.reload()
            }
        else if (level % 3 == 0 && solved == false) { 
            alert("You must solve the problem before continuing")
            console.log('yooplus')
            //let response = await axios.post('../pluslevel/',level)
            //console.log(response.data.success)
            setDisabled(true)     
            window.location.reload()
            }

    }
    
    // const [displayedString, setDisplayedString] = useState("");

    //     //usememo or usecallback
    // useEffect(() => {
    //     // let i = 0;
    //     const intervalId = setInterval(() => {
    //         if (i < menu[level][0].length) {
    //             setDisplayedString((prevString) => prevString + menu[level][0].charAt(i));
    //             i++;
    //         } else {
    //             clearInterval(intervalId);
    //         }
    //     }, 20);

    //     return () => {
    //         clearInterval(intervalId);
    //     };
    // }, [menu]);

    // //attempt2
    // (() => {
    //     let CharacterPos = 0;
    //     let MsgBuffer = "";
    //     let TypingSpeed = 50; // Millisecond
    //     let MsgIndex = 0;
    //     let delay;
    //     let id = document.getElementById("typing-text");

    //     const StartTyping = () => {
    //         if (CharacterPos != menu[level][MsgIndex].length) {
    //             MsgBuffer += menu[level][MsgIndex].charAt(CharacterPos);
    //             id.value = MsgBuffer + (CharacterPos != menu[level][MsgIndex].length - 1 ? "_" : "");
    //             delay = TypingSpeed;
    //         }
    //         CharacterPos++;
    //         setTimeout(StartTyping, delay);
    //     };
    //     StartTyping();
    // })();


    

    return (
        <> 
        <div>
            <img className = "leftScreen" src={bgpic} alt="my Image"/>
            <div id="scriptloc">
            {user && <Typewriter
            options={{delay:25}}
            onInit={(typewriter)=> {
                typewriter.typeString(menu[user.level][0])
                .start();
            }}/>}
            </div>
            
           
            <ArrowForwardIosIcon/>
            
            
        </div>
        <button disabled={disabled} onClick={clickLeft}style={{position: "fixed", bottom:"10%", left: "6.5%", backgroundColor: "transparent", zIndex:"3", scale:"300%",}}> <ArrowBackIosIcon style={{color:"wheat", borderBlockColor:"transparent"}}/></button>
        <button onClick={clickRight}style={{position: "fixed", bottom:"10%", left: "40%", backgroundColor: "transparent", zIndex:"3", scale:"300%",}}> <ArrowForwardIosIcon style={{color:"wheat", borderBlockColor:"transparent"}}/></button>
        </>

    );
}

    // return(
    //     <div>
    //         <img className = "leftScreen" src={pic1} alt="my Image"/>
    //         <p className = "LSscript">
    //             {menu[0]}
    //         </p>

    //     </div>
    // )
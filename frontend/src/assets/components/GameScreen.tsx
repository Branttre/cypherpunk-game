import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-javascript";
import 'ace-builds/src-noconflict/theme-dracula';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TerminalIcon from '@mui/icons-material/Terminal';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { SettingsCellOutlined, WatchOutlined } from '@mui/icons-material';



export default function GameScreen() {

    const editormenu = [
//Level 0
'//Welcome to the Terminal!!!',
//Level 3 Problem 1
'//This is your Terminal. You will write\n\
//code here and its output will display below.\n\
//A standard function has been written to get\n\
//you started. Edit the code below to project\n\
//"Hello World!" into the physical world\n\n\
//Hint: you only need to edit code on line 11\n\n\n\
function helloWorld() {\n   return("Enter Text Here")\n}\n\n\
//Execute your code by pressing the run button\n\
//once you are ready\n\n \
helloWorld()\n\n',
//Level 6 Problem 2
'//Assign a string or integer to the variables.\n\
//The function below will return your data to Nova\n\
//Hint: Check your datapad for help;\n\
//Hint: Update lines 7 and 8 with your information\n\n\n\
let name = \n\
let age = \n\
let occupation = "CypherPunk" \n\n\
//Nova has created an interpreter to evaluate your code\n\
//Select the green button to execute your code\n\
//Altering the interpreter below will result in\n\
//catastrophic meltdown of Nova\n\n\n\n\n\
function returnData(string, int) {\n\
    if (Number.isInteger(int)) {\n\
        if (typeof string === "string"){\n\
            return("True")\n\
        }\n\
        else {\n\
            return("Your name should be a string!")\n\
        }\n\
    }\n\
    else{\n\
        return("Your age should be an integer!")\n\
    }\n\
}\n\n\
returnData(name, age)'
    ]

    

    

    
    const {level}:any = useContext(UserContext)
    const {setLevel}:any = useContext(UserContext)
    

    
    const {user}:any = useContext(UserContext)
    const {setUser}:any = useContext(UserContext)
    const [code, setCode] = useState(undefined);
    const [output, setOutput] = useState('');
    const [currentCount, setCurrentCount] = useState(1);
    const [answer, setAnswer] = useState(false);
    const {solved}:any = useContext(UserContext);
    const {setSolved}:any = useContext(UserContext);



    if (currentCount % 3 == 0){
        setCurrentCount(level/3)
        console.log(currentCount)
        
    }
    console.log(level + "is the level")


    async function handleSubmit(event){
        const test = eval(code)
        setOutput(test)
        console.log(answer + "in submit")
    }
    
        //List of all Problem Test Cases
    //Problem1: Level 3
    if (output == "Hello World!" && level == 3) {
      setAnswer(true)
      setSolved(true)
      setOutput('Congratulations you have written your first program!')
      
      console.log(answer)

  }
  
  //Problem2: Level 6
  if (output == "True" && level == 6) {
    setAnswer(true)
    setSolved(true)
    setOutput('One step closer to becoming a true Cypherpunk.')
    console.log(answer)

  }
  //Problem3: Level 9
  if (level == 7) {

  }
  //Problem4: Level 12
  if (level == 8) {

  }

  //Problem5: Level 15
  if (output == "Hello World!" && level == 6) {
    setAnswer(true)
    setSolved(true)
    setOutput('Congratulations you are now as smart as Brant!')
    console.log(answer)

  }

    // //List of all Problem Test Cases
    // //Problem1: Level 3
    // if (output == "Hello World!" && level == 3) {
    //     setAnswer(true)
    //     setSolved(true)
    //     setOutput('Congratulations you are now as smart as Brant!')
    //     console.log(answer)

    // }
    
    // //Problem2: Level 6
    // if (output == "Hello World!" && level == 6) {
    //   setAnswer(true)
    //   setSolved(true)
    //   setOutput('Congratulations you are now as smart as Brant!')
    //   console.log(answer)

    // }
    // else if (level % 3 == 0) {
    //   alert("Your code is incorrect, reference your datapad and try again.")
    // }
    
    useEffect(() => {
        if (level % 3 == 0) {
            let index = (level/3)
            setCode(editormenu[index]);
            //console.log(level + "is the index")
            console.log(index + "is the actual index")
    }}, [level]);
    if (level % 3 == 0) {
        // let index = Math.trunc(level/3)
        // console.log(index + "is the index")
        // setCode(editormenu[index])
        console.log(level + "inside if statement")
        return (
            <div style={{marginLeft:"50%"}}>
              <AceEditor
                style={{maxHeight:'46.25vh'}}
                mode="javascript"
                theme="dracula"
                onChange={setCode}
                value={code}
                fontSize={20}
                width='100%'
                editorProps={{ $blockScrolling: true }}
                
              />
              <button style={{position:'absolute',marginTop:'-50px',marginLeft:'10%', color:'green',backgroundColor:'black', fontSize:'large'}} onClick={handleSubmit}><TerminalIcon/></button>
              <div className='black-box'>
                  {'Terminal'}<br/>&nbsp;&nbsp;&nbsp;&nbsp;{'>>>'} {output}
      
              </div>
            </div>
      
          );
    } else {
        return (
            <div style={{marginLeft:"50%"}}>
              <AceEditor
                style={{maxHeight:'46.25vh'}}
                mode="javascript"
                theme="dracula"
                onChange={setCode}
                value={""}
                fontSize={24}
                width='100%'
                editorProps={{ $blockScrolling: true }}
                
              /> 
              <button style={{position:'absolute',marginTop:'-50px',marginLeft:'10%', color:'green',backgroundColor:'black', fontSize:'large'}} onClick={handleSubmit}><TerminalIcon/></button>
              <div className='black-box'>
                  {'Terminal'}<br/>&nbsp;&nbsp;&nbsp;&nbsp;{'>>>'} {output}
      
              </div>
            </div>
      
          );
    }
    // return (
    //   <div style={{marginLeft:"50%"}}>
    //     <AceEditor
    //       style={{maxHeight:'50%'}}
    //       mode="javascript"
    //       theme="dracula"
    //       onChange={setCode}
    //       value={code}
    //       fontSize={24}
    //       width='100%'
    //       editorProps={{ $blockScrolling: true }}
          
    //     /> 
    //     <button style={{position:'absolute',marginTop:'-50px',marginLeft:'10%', color:'green',backgroundColor:'black', fontSize:'large'}} onClick={handleSubmit}><TerminalIcon/></button>
    //     <div className='black-box'>
    //         {'Terminal'}<br/>&nbsp;&nbsp;&nbsp;&nbsp;{'>>>'} {output}

    //     </div>
    //   </div>

    // );
  }
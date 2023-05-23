import { useState, useEffect, useContext} from "react"
import axios from "axios"
import { Button, Image } from "react-bootstrap"
import { BsFillPencilFill } from "react-icons/bs";
import { UserContext } from "../../App"
import profileBGgif from "../resources/profileBGgif.gif";
import profpic1 from "../resources/profpic1.png";
import profpic2 from "../resources/profpic2.png";
import profpic3 from "../resources/profpic3.png";
import profpic4 from "../resources/profpic4.webp";


const profile_pic = profpic1
const myImages = [profpic1, profpic2, ,profpic4, profpic3, 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6238c0f-106f-4e4c-bf1c-00360465ae97/de9kn9v-81e48dd9-a3a7-4b84-9777-cd69e1e95c58.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2MjM4YzBmLTEwNmYtNGU0Yy1iZjFjLTAwMzYwNDY1YWU5N1wvZGU5a245di04MWU0OGRkOS1hM2E3LTRiODQtOTc3Ny1jZDY5ZTFlOTVjNTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4e8e87Y7jSxcAmxHHeqyBTEmFjvynofA0Qys32DdXFQ']
export const changeEmail = async(email) => {
    console.log(email)
    let response = await axios.post('user/changeEmail/', {
        'email': email
    })
    console.log(response.data.success)
    if (response.data.success === false){
        alert('invalid email')
    } else {
        alert('email changed successfully')
    }
}
export const changePassword = async(newPassword, confirmPassword, oldPassword) => {
    if (newPassword === confirmPassword){
        let response = await axios.post('user/changePassword/', {
            'password': newPassword,
            'oldPassword': oldPassword
        })
        console.log(response.data.success)
        if (response.data.success === false) {
            alert('Incorrect original password')
        } else {
            alert('Password Changed successfully')
        }

    } else {
        alert('Confirmed password does not match')
    }
}
export const changeProfilePic = async(profilePic) => {
    console.log(profilePic)
    let response = await axios.post('user/changePicture/', {
        'profile_pic': profilePic
    })
    console.log(response.data.success)
    if (response.data.success === true){
        window.location.reload()
    }
}
export default function Profile(){
    const [hidden, setHidden] = useState(true)
    const [email, setEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [profilePic, setProfilePic] = useState(profile_pic)
    const {user}:any = useContext(UserContext)
    const [oldPassword, setOldPassword] = useState('')

    const [selectedImageIndex, setSelectedImageIndex] = useState(-1)
    const [style, setStyles] = useState({})
    const style2 = {width: "180px", height: "180px", padding: "2%"}
    // console.log(email)
    // console.log(newPassword)
    // console.log(confirmPassword)
    // console.log(profilePic)
    console.log(user)
    useEffect(() => {
        const newStyle = {};
        myImages.forEach((_, index) => {
          if (index === selectedImageIndex) {
            newStyle[index] = { border: "5px solid blue", width: "180px", height: "180px", padding: "2%" };
          } else {
            newStyle[index] = { border: "none", width: "180px", height: "180px", padding: "2%"};
          }
        });
        setStyles(newStyle);
      }, [selectedImageIndex]);

    const handleImageClick = (idx) => {
        setSelectedImageIndex(idx)
      }

    return (
    <>
    <Image src={user.profile_image} alt='profile pic' style={{right:"2vw",top:'1vh',zIndex:'3',position:'absolute', borderRadius: '50%', height: '5vh', width: '5vh', border: '1px solid #00ffff'}}/> 
    <div>
        {/* <div style={{backgroundImage: 'url("https://img.freepik.com/premium-photo/night-view-city-cyberpunk-style-d-rendering_672982-1779.jpg?w=2000")', backgroundSize: 'cover'}}> */}
        {/* <h3 style={{display: 'flex', justifyContent: 'center', color: 'white'}}>My Profile</h3> */}
        </div>
        <div style={{backgroundColor: 'black'}}>
            <div>
                <img style = {{width: '100vw',maxHeight:'92.5vh',zIndex:'1'}}src = {profileBGgif}></img>
                <Image src={user.profile_image} alt='profile pic' style={{left:"2vw",top:'9.5vh',zIndex:'3',position:'absolute', borderRadius: '10%', height: '20vh', width: '20vh', border: '5px solid #F72119'}}/>
                <p style={{fontFamily: 'papyrus',left:'3.5vw',top:'28vh',position:'absolute',zIndex:'4',color:'#F72119', fontSize:'35px',fontWeight:'bold',textAlign:'center',textShadow:'2px 2px 4px rgba(247,33,25,.75)'}}> {user.firstname}</p>
                <p style={{fontFamily: 'papyrus',left:'3.5vw',top:'34vh',position:'absolute',zIndex:'4',color:'#F72119', fontSize:'25px',textAlign:'center',fontWeight:'bold',textShadow:'2px 2px 4px rgba(247,33,25,.75)'}}> level: {user.level} </p>
            </div>
            <div>
                <div style={{display: 'flex', alignItems: 'center',backgroundColor:'black'}}>
                    {/* <h2>{user.firstname}</h2> */}
                    {/* <p style={{color: 'GrayText', marginLeft: '10px'}}>lvl {user.level}</p> */}
                    <BsFillPencilFill style={{fontSize:'20px',cursor: 'pointer', color: '#F72119', marginLeft: '50px',left:'1.5vw',top:'41vh',position:'absolute',zIndex:'4',textAlign:'left',textShadow:'2px 2px 4px rgba(247,33,25,.75)'}} className="ms-auto" onClick={()=> setHidden(false)} />
                </div>
                {/* <h3>{user.username}</h3> */}
            </div>
            {!hidden && <>
                <p style={{borderBottom: '2px solid black'}}></p>
                <div>
                    <form onSubmit={(e)=>[e.preventDefault(), changeEmail(email), setHidden(true)]}>
                    <input type="text" placeholder="Change Email" onChange={(e) => setEmail(e.target.value)}></input>
                    <input type='submit' value="Change" />
                    </form>
                </div>
                <p style={{borderBottom: '2px solid black'}}></p>
                <div>
                <form onSubmit={(e)=>[e.preventDefault(), changePassword(newPassword, confirmPassword, oldPassword), setHidden(true)]}>
                <input type="password" placeholder="Old password" onChange={(e) => setOldPassword(e.target.value)}></input>
                <input type="password" placeholder="Change Password" onChange={(e) => setNewPassword(e.target.value)}></input>
                <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}></input>
                <input type='submit' value="Change" />
                </form>
                </div>
                <p style={{borderBottom: '2px solid black'}}></p>
                {myImages.map((image, idx)=>(
                    <img style={{...style[idx], ...style2}} className="image" id={idx} src={image} onClick={()=> {setProfilePic(image); handleImageClick(idx)}}/>
                ))}
                <div>
                <Button onClick={(e)=> [e.preventDefault(), changeProfilePic(profilePic), setHidden(true)]}>Make New Profile Pic</Button>
                </div>
                <p style={{color: 'GrayText', cursor: 'pointer'}} onClick={()=> setHidden(true)}>Cancel</p>
            </>}
        </div>
    </>
    )
}
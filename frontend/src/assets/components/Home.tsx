import Login from "./Login";
import BackgroundPixels from "../resources/BackgroundPixels.jpeg";
import { UserContext } from "../../App";
import { useContext } from "react";
import GameScreen from "./GameScreen";


export default function Index() {
    const {user}:any = useContext(UserContext)

    console.log(user.level)

    if (user != "" && user.level) {
        window.location.href = '/gamescreen';
    }

    return(
        <div style={{backgroundImage: `url('${BackgroundPixels}')`,backgroundSize:'100% 100%',minHeight:'94vh',minWidth:'100vw',position: "absolute",backgroundRepeat: 'no-repeat',zIndex:'1'}}>
            {/* <GameScreen/> */}
            <Login />
        </div>

    );
}
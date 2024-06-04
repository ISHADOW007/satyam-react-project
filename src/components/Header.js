import {LOGO_URL} from "../utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login");
    const onLineStatus =useOnlineStatus();
    console.log(onLineStatus)
    return (
    <div className="flex justify-between bg-pink-100 shadow-lg ">
        <div className="logo-container">
            <img className="w-56" src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">
                    Online Status:{onLineStatus ? "🟢" :"🔴"}
                </li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"> <Link to="/about">About Us</Link></li>
                <li className="px-4">
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                    </li>
                <li className="px-4">Cart</li>
                <button className="login"
                onClick={()=>{
                    btnNameReact == "Login" ? setBtnNameReact("Logout"):setBtnNameReact("Login");
                }}>
                    {btnNameReact}
                    </button>
            </ul>
        </div>
    </div>
    );
};

export default Header ;
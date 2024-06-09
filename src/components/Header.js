import {LOGO_URL} from "../utils/constants"
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login");
    const onLineStatus =useOnlineStatus();
    //console.log(onLineStatus)
    const {loggedInUser} = useContext(UserContext);
    // selector is a hook in react (it give access of the store)
    // subscribing to the store using a selector
    //after that we specify which part of store we have to access (store.cart.item) & whenever item modifies carItem modifies
    const cartItems= useSelector((store)=> store.cart.items)
    
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
                <li className="px-4 font-bold">
                <Link to="/cart">Cart- ({cartItems.length} items)</Link>
                </li>
                <button className="login"
                onClick={()=>{
                    btnNameReact == "Login" ? setBtnNameReact("Logout"):setBtnNameReact("Login");
                }}>
                    {btnNameReact}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
        </div>
    </div>
    );
};

export default Header ;
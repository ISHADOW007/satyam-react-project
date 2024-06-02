import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const ResturantMenu= ()=>{
    const[resInfo,setResInfo] =useState(null)
    const {resId} =useParams();
    console.log(resId);

    const fetchMenu = async () => {
        try {
            const response = await fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
            const data = await response.json(); // Correctly call the json() method
            console.log(data);
            setResInfo(data.data);// Log the parsed JSON data
        } catch (error) {
            console.error("Error fetching menu:", error); // Catch and log any errors
        }
    }
 
    useEffect(() => {
        fetchMenu();
    }, []);

    if(resInfo==null){
        return <Shimmer /> ;
    }
    const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
   
    
    const itemCards=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards;
    console.log(itemCards,"satyam");
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",") } - {costForTwoMessage}</p>
            
            <h2>Menu</h2>
           <ul>
            {itemCards?.map((item)=>(
                <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100}Rs</li>
            ))}
            </ul>
        </div>
    )  
}
export default ResturantMenu;
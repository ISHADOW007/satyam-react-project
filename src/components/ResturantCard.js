import {CDN_URL} from "../utils/constants";
import CuisineList from './CuisineList';
import UserContext from "../utils/UserContext";
import { useContext } from "react";
export const ResturantCard = ({obj}) =>{
    console.log(obj,"object recived");
    const { loggedInUser}= useContext(UserContext);
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating}= obj?.info
    const {deliveryTime} = obj?.info?.sla
    return (
        <div className="m-4 p-4 w-[235px] rounded-lg bg-gray-100 hover:bg-gray-400 " >
            <img 
            className="rounded-lg"
            alt="res-log"
            src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <CuisineList cuisines={cuisines} />
            
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime + "minutes"}</h4>
            <h4> User :{loggedInUser}</h4> 
        </div>
    )
}



//Higher Order Component
// Input - ResturantCard => Resturac
export const withPromotedLabel = (ResturantCard) =>{
    return (props)=>{
        console.log("satyam")
        const offer=(props?.obj?.info?.aggregatedDiscountInfoV3?.header);
        
        return (
            <div>
                
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg" >{offer}</label>
                <ResturantCard {...props}/>
            </div>
        );
    };
};


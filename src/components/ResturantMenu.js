
import Shimmer from "./Shimmer";
import { Form, useParams } from "react-router-dom";
import ResturantCategory from "./ResturantCategory";

import useResturantMenu from "../utils/useResturantMenu"
import ResturantCategory from "./ResturantCategory";
const ResturantMenu= ()=>{
   
    const {resId} =useParams();
    console.log(resId);

    const resInfo=useResturantMenu(resId);
    if(resInfo==null){
        return <Shimmer /> ;
    }
    const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
   
    
    const itemCards=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards;
    console.log(itemCards,"satyam");
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
        c?.card?.card?.["@type"].includes("ItemCategory")
    );
    //console.log(categories)
     return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bpld text-lg">{cuisines.join(",") } - {costForTwoMessage}</p>
            {/*catrgories accordiance*/}
            {categories?.map((category)=>(
                <ResturantCategory key={category?.card?.card?.title} data={category?.card?.card}/>
            ))}
           
        </div>
    )  
}
export default ResturantMenu;
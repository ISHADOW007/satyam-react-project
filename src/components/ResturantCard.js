import {CDN_URL} from "../utils/constants";
const ResturantCard = ({obj}) =>{
    console.log(obj,"object recived");
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating}= obj?.info
    const {deliveryTime} = obj?.info?.sla
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0",}}>
            <img 
            className="res-logo"
            alt="res-log"
            src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime + "minutes"}</h4> 
        </div>
    )

}

export default ResturantCard ;
import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    // Local state variable - Super powerful variable
    const [ListOfRestaurant, setListOfRestaurant] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = ListOfRestaurant.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfRestaurant(filteredList);
                }}>
                    Top rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {ListOfRestaurant.map((item) => (
                    <ResturantCard 
                        key={item.info.id}
                        obj={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;

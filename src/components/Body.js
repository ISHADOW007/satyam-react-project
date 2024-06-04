
import ResturantCard from "./ResturantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
    // Local state variables
    const [ListOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    // if no dependency array useState is called on every  render
    //if dependency array is empty = [ ]=> useEffect is called on initial  render (just once)
    //if depenency  array is [BtnNameReact] =>  useEffect is called everytime btnNameReact is updated
    // Fetch data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(restaurants);
        setFilteredRestaurant(restaurants);
    };

    if(ListOfRestaurant.length === 0)
        return (<Shimmer />) ;
    return (
        <div className="body">
            <div className="filter">
                <div className="search m-4 p-4">
                <input 
                    type="text" 
                    className="border border-solid border-black" 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="px-4 py-1 bg-green-100 m-4 rounded-lg"
                    onClick={() => {
                        const filteredRestaurant = ListOfRestaurant.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}>
                    Search
                </button>
                <button className="px-4 py-2 bg-gray-100 " 
                    onClick={() => {
                        const filteredList = ListOfRestaurant.filter((res) => res.info.avgRating > 4);
                        setFilteredRestaurant(filteredList);
                    }}>
                    Top rated Restaurants
                </button>
                </div>
            </div>
            <div className="flex flex-wrap ">
                {filteredRestaurant?.map((item) => (
                   <Link key={item.info.id} to={"resturants/"+item.info.id}><ResturantCard 
                   key={item.info.id}
                   obj={item}/></Link> 
                   
                ))}
            </div>
        </div>
    );
};

export default Body;

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";
import useResturantMenu from "../utils/useResturantMenu";

const ResturantMenu = () => {
    const [showIndex, setShowIndex] = useState(false);
    const { resId } = useParams();
    console.log(resId);

    const resInfo = useResturantMenu(resId);

    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
    
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(itemCards, "satyam");
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
        c?.card?.card?.["@type"].includes("ItemCategory")
    );

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines?.join(", ")} - {costForTwoMessage}</p>
            {/* categories accordion */}
            {categories?.map((category, index) => (
                <ResturantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index === showIndex}
                    setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </div>
    );
};

export default ResturantMenu;

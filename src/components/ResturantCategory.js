import ItemList from "./ItemList";
import { useState } from "react";

const ResturantCategory = ({ data, showItems, setShowIndex }) => {
    console.log(data?.itemCards);

    const handleClick = () => {
        console.log("clicked");
        setShowIndex();
    }

    return (
        <div className="w-6/12 mx-auto my-3 bg-gray-50 shadow-lg p-4">
            {/* Header */}
            <div>
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data?.itemCards?.length})</span>
                    <span>⬇️</span>
                </div>
            </div>
            {/* Accordion Body */}
            {showItems && <ItemList items={data?.itemCards} />}
        </div>
    )
}

export default ResturantCategory;

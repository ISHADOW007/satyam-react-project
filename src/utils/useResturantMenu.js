import { useEffect, useState } from "react";
import { MENU_API } from "./constants";


const useResturantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        if (!resId) return;

        const fetchData = async () => {
            try {
                const response = await fetch(MENU_API + resId);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setResInfo(json.data);
            } catch (error) {
                console.error("Failed to fetch menu data", error);
            }
        };

        fetchData();
    }, [resId]);

    return resInfo;
};

export default useResturantMenu;


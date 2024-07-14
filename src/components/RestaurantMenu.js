import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId=${resId}&catalog_qa=undefined&query=Poha&submitAction=ENTER`
      );
      const json = await data.json();
      setResInfo(json);
      console.log("json-->", json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if(resInfo === null) {
    return <Shimmer />;
  }

  const {name, areaName, costForTwoMessage, cuisines, avgRating, totalRatingsString, veg=false} = resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards)
  return (
    <div className="menu">
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
                <h1>{name}</h1>
                <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
                <h5>{areaName}</h5>
            </div>
            <div>
                <h4>{avgRating}</h4>
                <h4>{totalRatingsString}</h4>
                <h5 style={{color: veg ? "green" : "red"}}>{veg ? "Veg" : "Non-Veg"}</h5>
            </div>
        </div>
      <ul>
        {
            itemCards?.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs{item?.card?.info?.price}</li>)
        }
      </ul>
    </div>
  );
};

export default RestaurantMenu;

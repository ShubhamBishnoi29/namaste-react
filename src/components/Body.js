import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    const [topRatedRestaurant, setTopRatedRestaurant] = useState(resList);

    const filterRestaurant = () => {
        const filterData = resList.filter(res => res?.card?.card?.info?.avgRating >= 4);
        setTopRatedRestaurant(filterData);
    }

    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={filterRestaurant}>Top rated restaurant</button>
        </div>
        <div className="res-container">
          {
              topRatedRestaurant.filter(item => item.card.card.info).map(filterItem => <RestaurantCard key={filterItem?.card?.card?.info?.id} resData = {filterItem.card.card} />)
          }
        </div>
      </div>
    );
};

export default Body;
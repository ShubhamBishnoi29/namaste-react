import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filterRestaurant = () => {
    const filterSearchData = listOfRestaurant.filter((res) =>
      res?.card?.card?.info?.name
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filterSearchData);
  };

  const filterTopRatedRestaurant = () => {
    const filterData = listOfRestaurant.filter(
      (res) => res?.card?.card?.info?.avgRating >= 4.5
    );
    setListOfRestaurant(filterData);
  };

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&collection=80373&tags=layout_CCS_Poha&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const json = await data.json();
      // Optional Chaining
      setListOfRestaurant(json?.data?.cards);
      setFilteredRestaurant(json?.data?.cards);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={filterRestaurant}>Search</button>
        </div>
        <button className="filter-btn" onClick={filterTopRatedRestaurant}>
          Top rated restaurant
        </button>
      </div>
      {listOfRestaurant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filteredRestaurant
            .filter((item) => item.card.card.info)
            ?.map((filterItem) => (
              <RestaurantCard
                key={filterItem?.card?.card?.info?.id}
                resData={filterItem.card.card}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Body;

import React, { createContext, useState, useEffect } from 'react';
import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [city, setCity] = useState(" (همه) مقاصد");
  const [cities, setCities] = useState([]);
  const [property, setProperty] = useState("(همه) خانه ها");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("(همه) قیمت‌ها");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allcities = houses.map((house) => {
      return house.city;
    });

    const uniqueCountries = [' (همه) مقاصد', ...new Set(allcities)];

    setCities(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    const uniqueProperties = [' (همه) تمام خانه ها', ...new Set(allProperties)];

    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);
    const isDefault = (str) => {
      return str.split(' ').includes('(همه)');
    };

    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      if (
        house.city === city &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      if (isDefault(city) && isDefault(property) && isDefault(price)) {
        return house;
      }
      if (!isDefault(city) && isDefault(property) && isDefault(price)) {
        return house.city === city;
      }
      if (!isDefault(property) && isDefault(city) && isDefault(price)) {
        return house.type === property;
      }
      if (!isDefault(price) && isDefault(city) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      if (!isDefault(city) && !isDefault(property) && isDefault(price)) {
        return house.city === city && house.type === property;
      }
      if (!isDefault(city) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.city === city;
        }
      }
      if (isDefault(city) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        city,
        setCity,
        cities,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        handleClick,
        houses,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
import React from 'react'
import CityDropDown from './CityDropDown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import { HouseContext } from './HouseContext';
import { RiSearch2Line } from 'react-icons/ri';
import { useContext } from 'react';


export default function Search() {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className=' text-gray-100 px-[30px] py-6 max-w-[1170px] mx-auto
         flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative
          lg:-top-4 lg:shadow-1 backdrop-blur-[2px] lg:bg-transparent lg:backdrop-blur rounded-lg'>
      <CityDropDown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={() => {
          handleClick();
        }}
        className='bg-red-700 hover:bg-red-600 transition w-full
             lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center  text-lg'>
        <RiSearch2Line />
      </button>
    </div>
  );
};

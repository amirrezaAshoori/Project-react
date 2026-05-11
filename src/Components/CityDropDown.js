import React, { useState, useContext } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const CityDropDown = () => {
    const { city, setCity, cities } = useContext(HouseContext);
    const [ isOpen, setIsOpen ] = useState(false);
    return (
        <Menu as='div' className='dropdown relative'>
            <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
                <RiMapPinLine className='dropdown-icon-primary' />
                <div>
                    <div className='text-[15px] font-medium leading-tight'>{city}</div>
                    <div className='text-[13px]'> انتخاب مقصد </div>
                </div>
                {isOpen ? (<RiArrowUpSLine className='dropdown-icon-secondary' />) : (<RiArrowDownSLine className='dropdown-icon-secondary' />)}
            </Menu.Button>
            <Menu.Items className='dropdown-menu'>
                {cities.map((city, index) => {
                    return (
                        <Menu.Item
                            as='li'
                            onClick={() => setCity(city)}
                            key={index}
                            className='cursor-pointer rounded-full px-2 py-2 hover:bg-red-500 transition'>
                            {city}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};

export default CityDropDown;
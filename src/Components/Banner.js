import React from 'react'
import Image from '../assets/img/banner.jpg';
import Search from '../Components/Search';

export default function Banner() {
  return (
    <section className='h-[90vh] bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: `url(${Image})` }}>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className=' w-[140vh] text-3xl lg:text-[58px] font-semibold leading-none my-8  text-gray-100 '>
            <span className='text-red-600'> ویلای </span>
            ایده آلت همین جاست
          </h1>
          <p className='max-w-[480px] my-8 mx-4 text-right text-white text-2xl'>
            <span className='text-sm' >اجاره ویلا، سوئیت و اقامتگاه در شمال و سراسر ایران </span>
            <br />
            سفر پاییزی از تو، جاباما
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>

        </div>
      </div>
      <Search />
    </section>
  )
}

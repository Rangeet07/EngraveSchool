import {Swiper, SwiperSlide} from "swiper/react"
// import {Autoplay, Pagination} from "swiper"
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination, Autoplay],
//   ...
// });

import React from 'react'
import PortfolioCard from "@/features/common/modules/PropertyCard/PortfolioCard";
import { useIsDesktop } from "@/features/common/Hooks/useIsDesktop";

const PortfolioSlider = ({portfolios}) => {
  const {isDesktop} = useIsDesktop();
  return (
    <Swiper 
    slidesPerView={isDesktop? 3 : 1} 
    spaceBetween={10} 
    loop={true} 
    loopFillGroupWithBlank={true} 
    centeredSlides={true}
    autoplay={{delay: 2000, disableOnInteraction: true}}
    pagination={{ dynamicBullets: true}}
    modules={[Autoplay, Pagination]}
    className="mySwiper"
    >
    {portfolios.map((portfolio) => (
      <SwiperSlide key={portfolio.data}>
        <PortfolioCard {...portfolio}/>

        
      </SwiperSlide>
    ))}

    </Swiper>
  )
}

export default PortfolioSlider
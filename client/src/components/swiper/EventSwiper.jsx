import styled from 'styled-components';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const EventSwiper = () => {
  return (
    <Swiper
      style={{"zIndex":1}}
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{delay: 1000}}
    >
      <SwiperSlide><EventPage>Event 1</EventPage></SwiperSlide>
      <SwiperSlide><EventPage>Event 2</EventPage></SwiperSlide>
      <SwiperSlide><EventPage>Event 3</EventPage></SwiperSlide>
      <SwiperSlide><EventPage>Event 4</EventPage></SwiperSlide>
    </Swiper>
  );
};

const EventPage = styled.div`
  background: lightyellow;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`

export default EventSwiper;
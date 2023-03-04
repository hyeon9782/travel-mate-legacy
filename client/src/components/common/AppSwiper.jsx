import { Swiper, SwiperSlide } from 'swiper/react';

const AppSwiper = ({ children, list }) => {
    return (
        <Swiper>
            {list && list.map((item) => {
                return (
                    <SwiperSlide>
                        {children}
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )    
}

export default AppSwiper;
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";



import { Pagination, Navigation, Autoplay } from "swiper";

const Recomend = () => {


    const [modal, setModal] = useState(false);


    return (
        <>
            <div className="Recomend">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div data-aos="flip-up" className="recom_name">FOYDALI MA’LUMOTLAR VA TAVSIYALAR</div>
                        </div>
                        <div className={`col-12 recom_modal ${modal ? 'active' : ''}`}>
                            <div data-aos="flip-up" className="recom_swip">
                                <Swiper
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        767: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        },
                                    }}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation, Autoplay]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div data-aos="flip-left" onClick={() => setModal(!modal)} className="recom_box">
                                            <img src="/image/recom_icon.png" alt="" className="recom_icon" />
                                            <div className="recom_h">Umra qanday ibodat?</div>
                                            <div className="recom_p">"UMRA" Arab tilida 'ZIYORAT' degan ma'noni anglatadi. Shar'iy istil...
                                            </div>
                                        </div>

                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recomend
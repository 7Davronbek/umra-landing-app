import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div data-aos="fade-up" className="row">
                        <div className="col-md-5 text-md-start text-center">
                            <img src="/image/foot_logo.png" alt="" className="foot_img" />
                            <div className="foot_soc">
                                <a href="" className="foot_a"><img src="/image/instagram.png" alt="" /></a>
                                <a href="" className="foot_a"><img src="/image/facebook.png" alt="" /></a>
                                <a href="" className="foot_a"><img src="/image/telegram.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="foot_a_box">
                                        <div className="foot_h">Resurslar</div>
                                        <a href="" className="foot_a">Halol turizm</a>
                                        <a href="" className="foot_a">Xizmatlar</a>
                                        <a href="" className="foot_a">Kompaniya haqida</a>
                                    </div>
                                </div>
                                <div className="col-md-7 text-md-start text-center">
                                    <div className="foot_h_2">Biz haqimizda o’z fikringizni yozib qoldiring</div>
                                    <textarea className='foot_area' placeholder='Xabar qoldirish' cols="30" rows="10"></textarea>
                                    <div className="foot_btn">Yuborish</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div  className="col-12">
                        <div className="foot_zaaman_box">
                            <a href='' className="foot_zamaan">
                                @ Copyright 2022
                                <img src="/image/zamaan.png" alt="" className="foot_zamaan_img" />
                                All rights reserved.
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
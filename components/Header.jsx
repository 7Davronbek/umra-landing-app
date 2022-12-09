import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <>
            <div className="Header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div data-aos="zoom-in" className="header_h">Sifatli ishonchli kafolatli umra ziyoratlari</div>
                            <div data-aos="zoom-in-left" className="header_soc">
                                <a href="" className="header_icon">
                                    <Image src="/image/instagram.png" alt="HALOL TURIZM" width={56} height={56} />
                                </a>
                                <a href="" className="header_icon">
                                    <Image src="/image/facebook.png" alt="HALOL TURIZM" width={56} height={56} />
                                </a>
                                <a href="" className="header_icon">
                                    <Image src="/image/telegram.png" alt="HALOL TURIZM" width={56} height={56} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
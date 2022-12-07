import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [burger, setBurger] = useState(false);
    const [navbar, setNavbar] = useState(false);


    const changeNavbar = () => {
        if (window.scrollY >= 50) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar)
    }, [changeNavbar]);



    return (
        <>
            <div className={`Navbar ${navbar ? 'active' : ''}`}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-2">
                            <Link href='/'><img src="/image/logo.png" alt="" className="nav_logo" /></Link>
                        </div>
                        <div className={`col-10 d-flex justify-content-end align-items-center nav_a_box ${burger ? 'active' : ''}`} >
                            <div className="nav_box">
                                <Link href='/tourism' className={`nav_a`}>Halol turizm</Link>
                                <Link href='/services' className={`nav_a`}>Xizmatlar</Link>
                                <Link href='/about' className={`nav_a`}>Kompaniya haqida</Link>
                            </div>
                            <div className="nav_items">
                                <select className='nav_lang' >
                                    <option className='nav_langs' value="">Uzb</option>
                                    <option className='nav_langs' value="">Rus</option>
                                </select>

                                <a href="" className="nav_phone">
                                    <img src="/image/phone_icon.png" alt="" className="nav_phone_icon" />
                                    <div className="nav_phone_h">Bizga bog’laning</div>
                                </a>
                            </div>


                        </div>
                        <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auhref d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                            <div className="burger_up "></div>
                            <div className="burger_down"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
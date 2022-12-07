import React from 'react'

const Maps = () => {
    return (
        <>
            <div className="Maps">
                <div className="container">
                    <div data-aos="zoom-in" className="row">
                        <div className="col-12">
                            <div className="maps_name">Biz bilan bog'laning</div>
                            <div className="maps_p">
                                Batafsil ma'lumot kerakmi?
                                Biz bilan bog'laning.</div>
                            <div className="maps_soc">
                                <a href="" className="maps_icon"><img src="/image/instagram.png" alt="" /></a>
                                <a href="" className="maps_icon"><img src="/image/facebook.png" alt="" /></a>
                                <a href="" className="maps_icon"><img src="/image/telegram.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-12">
                            <iframe className='maps_map' title='Location' loading="lazy" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5980.757678828001!2d69.541058!3d41.452698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb494b791b0a9e278!2zNDHCsDI3JzA5LjciTiA2OcKwMzInMjcuOCJF!5e0!3m2!1sru!2s!4v1653649267059!5m2!1sru!2s" frameBorder="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Maps
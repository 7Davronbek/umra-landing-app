import React from 'react'

const Feedback = () => {
    return (
        <>

            <div className="Feedback">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <div data-aos="zoom-out" className="feed_box">
                                <div className='d-flex flex-column feed_back'>
                                    <div className="feed_name">Mutaxasis bilan bog’lanish</div>
                                    <input className='feed_inp' type="text" placeholder='Ism Sharifingiz:' />
                                    <input className='feed_inp' type="number" placeholder='Telefon raqamingiz:' />
                                    <textarea className='feed_area' placeholder='Xabar mazmuni:'></textarea>
                                    <div className="feed_send">Xabar yuborish</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback
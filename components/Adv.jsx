import React from 'react'

const Adv = () => {
    return (
        <>
            <div className="Adv pt-5">
                <div className="container">
                    <div className="row adv_box_row ">
                        <div data-aos="fade-right" className="col-lg-6">
                            <div className="adv_h_1">Kompaniyamiz haqida</div>
                            <div className="adv_h_2">Qisqa ma’lumot</div>
                            <div className="adv_p">Halal Tour kompaniyasi (dastlabki nomi Avia Go) O'zbekiston Turizm xizmatlari bozorida 12 yildan ortiq vagt
                                mobaynida mavjud bo'lib, dastlab o'z faoliyatini aviachiptalar sotuvidan boshlagan.
                            </div>
                            <div className="adv_p">
                                Keyinchalik kompaniya o'z faoliyatini kengaytirish maqsadida turizm xizmatlari faoliyati bilan shug'illana boshladi.
                            </div>
                            <div className="adv_p">
                                Xozirgi kunda Halal Tour kompaniyamiz 150 dan ortiq bo'lgan turoperatorlar 450 (70 dan ortiq)
                            </div>
                        </div>
                        <div data-aos="fade-left" className="col-lg-5 col-md-5 col-sm-7 col-8">
                            <img src="/image/adv.png" alt="" className="adv_img" />
                        </div>
                    </div>
                    <div data-aos="fade-up" className="row">
                        <div className="col-12">
                            <div className="adv_name">Bizning afzalliklarimiz</div>
                        </div>
                        <div className="col-lg-4">
                            <div className="adv_box">
                                <img src="/image/adv_icon_1.png" alt="" className="adv_box_img" />
                                <div className="adv_box_h">Ma’suliyat bilan yondashuv</div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="adv_box">
                                <img src="/image/adv_icon_2.png" alt="" className="adv_box_img" />
                                <div className="adv_box_h">Ishonchli, Hamyonbop, Qulay va Arzon</div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="adv_box">
                                <img src="/image/adv_icon_3.png" alt="" className="adv_box_img" />
                                <div className="adv_box_h">Yuqori malakali mutaxassisar ko’magi</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adv
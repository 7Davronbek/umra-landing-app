import React from 'react'

const Loader = () => {
    return (
        <>
            <div className="loading">
                {/* <img src="/image/loader_logo.png" alt="" className="loading_img" /> */}
                <div class="wrapper">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="shadow"></div>
                    <div class="shadow"></div>
                    <div class="shadow"></div>
                </div>
            </div>
        </>
    )
}

export default Loader
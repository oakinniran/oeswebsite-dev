import React from 'react'
import '../pages/banner.css'

function ErBanner() {
    return (
        <>
            <div className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill banner">
                <div className="md:w-1/2 ">
                    <br/><br/><br/><br/><br/><br/>
                    <div className="font-bold text-2x uppercase">For Teachers, Lectures & Students</div><br/>
                    <div className="text-2xl font-bold ">Content For Basic, Secondary, University & Training Schools</div>
                    <div className="text-1xl mb-10 leading-none">Learn and Teach on OES-OER</div>
                    <div><a href="https://applications.oes.com.ng/OESWebApp/erregister.do" className="bg-green-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Become Our Teacher</a></div>
                </div>
            </div>
        </>
    )
}

export default ErBanner

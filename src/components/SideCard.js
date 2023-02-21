import React from 'react'

function SideCard() {
    return (
        <><br/>
            <div class="flex justify-center items-center min-h-screen by-indigo-600">
                <div>
                    <div class="flex max-w-5xl p-2">
                      <div class="grid grid-cols-3 grid-rows-3 gap-4 grid-flow-row-dense lg:grid-cols-2">

                        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                            <img className=" w-full h-40 md:h-auto md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={require("../assets/e-learing.jpeg")} alt="" />
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">e-Learning Management Suite</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    Basic 1-8,Senior Secondary Classes (UPE), University and Training Schools.                        </p>
                                <p className="text-gray-600 text-xs">...AI integration with Data Analytics</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                            <img className=" w-full h-40 md:h-auto  md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={require("../assets/scheme.jpeg")} alt="" />
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">e-Learning Management Suite</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    Customizable Scheme of Work for schools adopting OES                        </p>
                                <p className="text-gray-600 text-xs">...Integrated Scheme with Teaching</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                            <img className=" w-full h-40 md:h-auto  md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={require("../assets/school-callaboration.jpeg")} alt="" />
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">Collaborating Management </h5>
                                <p className="text-gray-700 text-base mb-4">
                                Collaborating forum for classwork discussion                       </p>
                                <p className="text-gray-600 text-xs">...Integrated with classroom management</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                            <img className=" w-full h-40 md:h-auto  md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={require("../assets/atttendance.jpeg")} alt="" />
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">Attendance Management</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    Attendance and Ward's Pick-Up Via QR Code System.                        </p>
                                <p className="text-gray-600 text-xs">...AI integration with Visual Module</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                            <img className=" w-full h-40 md:h-auto  md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={require("../assets/augmentedreality.jpeg")} alt="" />
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">Lab Virtual & Argumented Reality Integrated</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    Integration of AI-based VR & AR Lab Modules                         </p>
                                <p className="text-gray-600 text-xs">...AI integration with Computer Vision</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                            <img className=" w-full h-40 md:h-auto  md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={require("../assets/calendar.jpeg")} alt="" />
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">Customizable Curriculum Management </h5>
                                <p className="text-gray-700 text-base mb-4">
                                    Our Classroom Management is Controlled by curriculum created by you.                        </p>
                                <p className="text-gray-600 text-xs">...Assignment, Test and Examination Module Integrated</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                            <img className=" w-full h-40 md:h-auto md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={require("../assets/e-liabrary1.jpeg")} alt="" />
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">Library Management</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    Able to read any books from our Library. Able to create your own library with your school.                        </p>
                                <p className="text-gray-600 text-xs">...Integrated Library Management</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                            <img className=" w-full h-40 md:h-auto  md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={require("../assets/financial.jpeg")} alt="" />
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">Enterprise Resource Planning Management</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    School Account, Sales, LPO, Expenses Management Module Integrated                        </p>
                                <p className="text-gray-600 text-xs">...Management of School Resources</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                            <img className=" w-full h-40 md:h-auto  md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={require("../assets/inventory.jpeg")} alt="" />
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">Stock and Web Management</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    All school resources are accounted for with our stock management. Able to manage your website also.                      </p>
                                <p className="text-gray-600 text-xs">...Integrated free email, QR Code app with Web management.</p>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                </div>



        </>
    )
}

export default SideCard

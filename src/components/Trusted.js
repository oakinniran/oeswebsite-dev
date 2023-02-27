import React from 'react'

function Trusted() {
    return (
        <div className="bg-white py-16 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
              Trusted by the Schools and Organisations
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 justify-center">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={require("../assets/purple-bee-icon.jpeg")}
                alt="training"
                width={198}
                height={88}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={require("../assets/brits.png")}
                alt="brits"
                width={198}
                height={88}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={require("../assets/mavellous.png")}
                alt="mavellous"
                width={198}
                height={88}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src={require("../assets/cp.png")}
                alt="cp"
                width={198}
                height={88}
              />  
                            <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src={require("../assets/solologo.png")}
                alt="cp"
                width={198}
                height={88}
              />             
              <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={require("../assets/readingrainbow.png")}
              alt="cp"
              width={198}
              height={88}
            />
           
            </div>
          </div>
        </div>
      )
    }

export default Trusted

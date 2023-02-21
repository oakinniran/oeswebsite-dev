import React, { useState } from "react";

//import '../assets/main.css'
import { CiPhone, CiMail } from "react-icons/ci";
import axios from "axios"

const FORM_ENDPOINT = "https://applications.oes.com.ng/OESWebApp/addreception.do?"; // TODO - fill on the later step

function Registration() {

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [msg, setMsg] = useState("");
  const [school, setSchool] = useState("");



  const handleSubmit1 = (e) => {
    e.preventDefault();
    axios
       .post(FORM_ENDPOINT, {
        fullname: name,
          passidno: email,
          phoneno: mobileNumber,
          anyissue: msg,
          companyname: school,
          school:"OES",
          helpdeskperson: "Web-Enquiry",
          term:"2023",
          whotosee: "The school Admin",
          sessionyear:"2022/2023"
       })
       .then((res) => {
        console.log(res);

       })
       .catch((err) => {
          console.log(err.message);
       });
 };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="relative isolate overflow-hidden bg-green-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Us Today.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Do you have any question for us? Will you like to subscribe to our product, please, do not hesitate to connect to us via this medium. Safe and Secure.
            </p>
            <form onSubmit={handleSubmit1}>
              <div className="mt-6 flex  gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border border-white/10 bg-white/5 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="name" className="sr-only">
                  Firstname and Lastname
                </label>
                <input
                  id="name"
                  name="fullname"
                  type="text"
                  autoComplete="fullname"
                  required
                  className="min-w-0 flex-auto rounded-md border border-white/10 bg-white/5 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter your Fullname"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mt-6 flex  gap-x-4">
                <label htmlFor="school" className="sr-only">
                  School Name (If any) or Your Organisation
                </label>
                <input
                  id="school"
                  name="school"
                  type="text"
                  autoComplete="school"
                  required
                  className="min-w-0 flex-auto rounded-md border border-white/10 bg-white/5 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter your School"
                  onChange={(e) => setSchool(e.target.value)}
                />
                <label htmlFor="phone" className="sr-only">
                  Phone No
                </label>
                <input
                  id="phone"
                  name="mobileNumber"
                  type="phone"
                  autoComplete="phone"
                  required
                  className="min-w-0 flex-auto rounded-md border border-white/10 bg-white/5 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter your Phone No"
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div> <div className="mt-6 flex  gap-x-4">
                <label htmlFor="msg" className="sr-only">
                  Message
                </label>
                <textarea
                  id="msg"
                  name="msg"
                  type="text"
                  autoComplete="msg"
                  required
                  className="min-w-0 flex-auto rounded-md border border-white/10 bg-white/5 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter your Message"
                  onChange={(e) => setMsg(e.target.value)}
                ></textarea>
              </div>
              <div><br />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-white-500 py-1.5 px-3.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Submit
                </button>
              </div></form>
            </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CiMail className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Enquiries@hremsoft.com</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Please, do not hesitate to reach out to us anytime you have a concern.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CiPhone className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">+234 803 3905 561</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                You can call us when you need a howto
              </dd>
            </div>
            <img src={require('../student.png')} alt="student" />
          </dl>
        </div>
      </div>
      <svg
        className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
        viewBox="0 0 1155 678"
        fill="none"
      >
        <path
          fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
          fillOpacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9089FC" />
            <stop offset={1} stopColor="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}





export default Registration


import React from 'react'

function Addcard() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #432e9b 0%,rgb(73, 44, 190) 100%)' }}
    >
      <div className="w-full max-w-7xl bg-[#432e9b] border border-[#FFC107] rounded-lg shadow-2xl p-4">
        <div className="sm:hidden mb-4">
          <label htmlFor="tabs" className="sr-only">Select tab</label>
          <select
            id="tabs"
            className="bg-[#432e9b] border-0 border-b border-[#FFC107] text-[#FFC107] text-sm rounded-t-lg focus:ring-[#FFC107] focus:border-[#FFC107] block w-full p-2.5"
          >
            <option>Statistics</option>
            <option>Classes</option>
            <option>FAQ</option>
          </select>
        </div>
        <ul className="hidden text-sm font-medium text-center text-[#FFC107] divide-x divide-[#FFC107] rounded-lg sm:flex rtl:divide-x-reverse mb-4" id="fullWidthTab" role="tablist">
          <li className="w-full">
            <button
              id="stats-tab"
              type="button"
              role="tab"
              aria-controls="stats"
              aria-selected="true"
              className="inline-block w-full p-4 rounded-ss-lg bg-[#3B0A75] hover:bg-[#2C007C] focus:outline-none text-[#FFC107]"
            >
              Statistics
            </button>
          </li>
          <li className="w-full">
            <button
              id="about-tab"
              type="button"
              role="tab"
              aria-controls="about"
              aria-selected="false"
              className="inline-block w-full p-4 bg-[#3B0A75] hover:bg-[#2C007C] focus:outline-none text-[#FFC107]"
            >
              Classes
            </button>
          </li>
          <li className="w-full">
            <button
              id="faq-tab"
              type="button"
              role="tab"
              aria-controls="faq"
              aria-selected="false"
              className="inline-block w-full p-4 rounded-se-lg bg-[#3B0A75] hover:bg-[#2C007C] focus:outline-none text-[#FFC107]"
            >
              FAQ
            </button>
          </li>
        </ul>
        <div id="fullWidthTabContent" className="border-t border-[#FFC107]">
          <div className="p-4 bg-[#2C007C] rounded-lg md:p-8" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-[#FFC107] sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">2000+</dt>
                <dd className="text-[#FFE082]">Students Enrolled</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">30+</dt>
                <dd className="text-[#FFE082]">Qualified Teachers</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">95%</dt>
                <dd className="text-[#FFE082]">Success Rate</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">15+</dt>
                <dd className="text-[#FFE082]">Courses Offered</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">8+</dt>
                <dd className="text-[#FFE082]">Years of Excellence</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">500+</dt>
                <dd className="text-[#FFE082]">Top Achievers</dd>
              </div>
            </dl>
          </div>
          <div className="hidden p-4 bg-[#2C007C] rounded-lg md:p-8" id="about" role="tabpanel" aria-labelledby="about-tab">
            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-[#FFC107]">Our Coaching Classes</h2>
            <ul role="list" className="space-y-4 text-[#FFE082]">
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg className="shrink-0 w-3.5 h-3.5 text-[#FFC107]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="leading-tight">Class 6th to 10th (CBSE/State Board)</span>
              </li>
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg className="shrink-0 w-3.5 h-3.5 text-[#FFC107]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="leading-tight">Class 11th & 12th Science (PCM/PCB)</span>
              </li>
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg className="shrink-0 w-3.5 h-3.5 text-[#FFC107]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="leading-tight">IIT-JEE & NEET Preparation</span>
              </li>
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg className="shrink-0 w-3.5 h-3.5 text-[#FFC107]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="leading-tight">Olympiad, NTSE & Scholarship Exams</span>
              </li>
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg className="shrink-0 w-3.5 h-3.5 text-[#FFC107]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="leading-tight">Crash Courses & Test Series</span>
              </li>
            </ul>
          </div>
          <div className="hidden p-4 bg-[#2C007C] rounded-lg" id="faq" role="tabpanel" aria-labelledby="faq-tab">
            <div>
              <h2>
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-[#FFC107] border-b border-[#FFC107]" aria-expanded="true">
                  <span>What is Passion Academy?</span>
                  <svg className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="#FFC107" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div className="hidden">
                <div className="py-5 border-b border-[#FFC107]">
                  <p className="mb-2 text-[#FFE082]">
                    Passion Academy is a premier coaching institute offering quality education and guidance for school and competitive exams. Our experienced faculty and comprehensive study material ensure student success.
                  </p>
                </div>
              </div>
              <h2>
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-[#FFC107] border-b border-[#FFC107]" aria-expanded="false">
                  <span>Which classes and exams do you cover?</span>
                  <svg className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="#FFC107" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div className="hidden">
                <div className="py-5 border-b border-[#FFC107]">
                  <p className="mb-2 text-[#FFE082]">
                    We provide coaching for classes 6th to 12th (CBSE/State Board), IIT-JEE, NEET, Olympiads, NTSE, and various scholarship and entrance exams.
                  </p>
                </div>
              </div>
              <h2>
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-[#FFC107] border-b border-[#FFC107]" aria-expanded="false">
                  <span>How can I enroll?</span>
                  <svg className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="#FFC107" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div className="hidden">
                <div className="py-5 border-b border-[#FFC107]">
                  <p className="mb-2 text-[#FFE082]">
                    You can enroll by visiting our institute, calling us, or filling out the registration form on our website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addcard

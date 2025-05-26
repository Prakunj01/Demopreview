import React from 'react'

function Hero() {
  return (
    <div>
      {/* Theme: Deep Purple/Royal Blue background, Golden Yellow text/icons */}
      <section
        className="min-h-[70vh] flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #2C007C 0%, #3B0A75 100%)',
        }}
      >
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
          <a
            href="#"
            className="inline-flex items-center justify-between px-1 py-1 pr-4 text-sm text-[#FFC107] bg-[#2C007C] rounded-full mb-7 hover:bg-[#3B0A75] border border-[#FFC107]"
            role="alert"
          >
            <span className="text-xs bg-[#FFC107] rounded-full text-[#2C007C] px-4 py-1.5 mr-3 font-bold">New</span>
            <span className="text-sm font-medium">Welcome to Passion Academy!</span>
            {/* Flame Icon */}
            <svg className="w-5 h-5 ml-2" fill="#FFC107" viewBox="0 0 20 20">
              <path d="M10 2C10 2 7 7 10 11c3-4 0-9 0-9zm0 0c2.5 3.5 6 7.5 6 11a6 6 0 1 1-12 0c0-3.5 3.5-7.5 6-11z" />
            </svg>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight" style={{ color: '#FFC107' }}>
            Passion Academy: Unlock Your Potential
          </h1>
          <p className="mb-8 text-lg font-normal text-[#FFE082] lg:text-xl sm:px-16 xl:px-48">
            At Passion Academy, we empower students to achieve academic excellence and personal growth through expert coaching, innovative learning, and a supportive environment.
          </p>
          <div className="flex flex-col mb-8 space-y-4 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-lg"
              style={{
                background: '#FFC107',
                color: '#2C007C',
                fontWeight: 'bold',
              }}
            >
              Learn more
              <svg className="w-5 h-5 ml-2 -mr-1" fill="#2C007C" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg"
              style={{
                borderColor: '#FFC107',
                color: '#FFC107',
              }}
            >
              <svg className="w-5 h-5 mr-2 -ml-1" fill="#FFC107" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Watch video
            </a>
          </div>
          {/* Pencil Icon */}
          <div className="flex justify-center mb-8">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              {/* Pencil body */}
              <rect x="25" y="10" width="10" height="30" rx="3" fill="#FFB300" />
              {/* Metal band */}
              <rect x="25" y="40" width="10" height="5" rx="1" fill="#B0BEC5" />
              {/* Eraser */}
              <rect x="25" y="45" width="10" height="7" rx="2" fill="#E53935" />
              {/* Pencil tip (white) */}
              <polygon points="30,7 35,10 25,10" fill="#fff" />
              {/* Pencil tip (lead) */}
              <polygon points="30,4 32,7 28,7" fill="#333" />
            </svg>
          </div>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold uppercase" style={{ color: '#FFC107' }}>FEATURED IN</span>
            <div className="flex flex-wrap items-center justify-center mt-8 text-[#FFE082] sm:justify-between">
              {/* Example logos, you can replace with real ones */}
              <span className="mx-4 text-lg font-bold">EduTimes</span>
              <span className="mx-4 text-lg font-bold">Scholarly</span>
              <span className="mx-4 text-lg font-bold">LearnHub</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero

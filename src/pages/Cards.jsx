import React from 'react'
import bookImg from '../assets/book.jpg'

function Cards() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #432e9b 0%,rgb(59, 35, 154) 100%)' }}>
      <div className="flex flex-col md:flex-row max-w-4xl w-full bg-[#432e9b] border border-[#FFC107] rounded-lg shadow-2xl overflow-hidden">
        <img
          className="object-cover w-full md:w-1/2 h-96 md:h-auto"
          src={bookImg}
          alt="Books"
          style={{ borderRight: '2px solid #FFC107' }}
        />
        <div className="flex flex-col justify-center p-8 w-full">
          <h5 className="mb-4 text-4xl font-extrabold tracking-tight" style={{ color: '#FFC107' }}>
            Passion Academy Classes
          </h5>
          <p className="mb-6 text-lg font-normal" style={{ color: '#FFE082' }}>
            Join Passion Academy to experience expert coaching, interactive classes, and a supportive learning environment for your academic success.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 text-lg font-bold rounded-lg transition"
            style={{
              background: '#432e9b',
              color: '#432e9b',
              boxShadow: '0 4px 20px 0 rgba(95, 51, 176, 0.15)',
            }}
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cards

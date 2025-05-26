import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function About() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-xl shadow-2xl p-8 mt-8 mb-8 border border-blue-900">
          <div className="flex items-center mb-6">
            <div className="h-12 w-1 bg-blue-500 rounded-full mr-4"></div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight">About <span className="text-blue-400">Passion Academy</span></h1>
          </div>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            <span className="font-semibold text-blue-400">Passion Academy</span> is dedicated to empowering students to achieve academic excellence and success in competitive exams. With a team of experienced educators and a student-centric approach, we provide high-quality coaching for:
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-6 text-base pl-4 space-y-1">
            <li>Classes 6th to 10th (CBSE/State Board)</li>
            <li>Classes 11th & 12th Science (PCM/PCB)</li>
            <li>IIT-JEE, NEET, and Olympiad preparation</li>
          </ul>
          <div className="flex items-center mb-4">
            <span className="inline-block h-3 w-3 bg-blue-400 rounded-full mr-2"></span>
            <span className="text-blue-300 font-semibold">Modern Facilities & Support</span>
          </div>
          <p className="text-gray-300 mb-6">
            Our modern classrooms, comprehensive study material, and regular assessments ensure that every student receives the attention and support they need to excel. We believe in nurturing not just academic skills, but also confidence and curiosity.
          </p>
          <div className="flex items-center mb-4">
            <span className="inline-block h-3 w-3 bg-blue-400 rounded-full mr-2"></span>
            <span className="text-blue-300 font-semibold">Why Choose Us?</span>
          </div>
          <ul className="list-disc list-inside text-gray-200 mb-6 text-base pl-4 space-y-1">
            <li>Expert and passionate faculty</li>
            <li>Personalized doubt-solving sessions</li>
            <li>Regular tests and performance analysis</li>
            <li>Motivational seminars and workshops</li>
            <li>Supportive and motivating environment</li>
          </ul>
          <div className="flex justify-center">
            <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition">
              Join Passion Academy and take the next step towards a brighter future!
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default About

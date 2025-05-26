import React from "react";

const Content = () => {
  const courses = [
    {
      title: "Foundation (6-10)",
      description: "Strong basics in Math, Science & Reasoning for future competitive success.",
    },
    {
      title: "Pre-Medical (NEET)",
      description: "Comprehensive Biology, Chemistry & Physics coaching for NEET aspirants.",
    },
    {
      title: "Engineering (JEE)",
      description: "Targeted preparation for JEE Main & Advanced with in-depth concept clarity.",
    },
    {
      title: "Olympiad & NTSE",
      description: "Special batches and resources for Olympiad, NTSE, and other scholarship exams.",
    },
    {
      title: "Crash Courses",
      description: "Short-term intensive courses for last-minute preparation and revision.",
    },
    {
      title: "Test Series",
      description: "Regular mock tests and performance analysis for all major exams.",
    },
  ];

  return (
    <section
      className="py-16 px-4 min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #2C007C 0%, #3B0A75 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-extrabold mb-4 tracking-tight"
            style={{ color: "#FFC107" }}
          >
            Our Courses
          </h2>
          <p className="text-lg mb-6" style={{ color: "#FFE082" }}>
            Explore our expertly designed programs to boost your academic journey and competitive exam success.
          </p>
          <div className="flex justify-center mb-8">
            <span className="inline-block w-24 h-1 rounded-full" style={{ background: "#FFC107" }}></span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative bg-[#2C007C] border border-[#FFC107] rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              {/* Decorative icon */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                <svg width="48" height="48" viewBox="0 0 60 60" fill="none">
                  {/* Pencil body */}
                  <rect x="25" y="10" width="10" height="20" rx="3" fill="#FFB300" />
                  {/* Metal band */}
                  <rect x="25" y="30" width="10" height="4" rx="1" fill="#B0BEC5" />
                  {/* Eraser */}
                  <rect x="25" y="34" width="10" height="7" rx="2" fill="#E53935" />
                  {/* Pencil tip (white) */}
                  <polygon points="30,7 35,10 25,10" fill="#fff" />
                  {/* Pencil tip (lead) */}
                  <polygon points="30,4 32,7 28,7" fill="#333" />
                </svg>
              </div>
              <h3 className="mt-8 text-2xl font-bold mb-2 text-[#FFC107] text-center">{course.title}</h3>
              <p className="text-[#FFE082] text-center">{course.description}</p>
              <div className="mt-6 flex justify-center w-full">
                <a
                  href="/admission"
                  className="px-6 py-2 rounded-full font-semibold shadow-lg transition"
                  style={{
                    background: "#FFC107",
                    color: "#2C007C",
                  }}
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-14">
          <div className="bg-[#3B0A75] border border-[#FFC107] rounded-xl p-8 max-w-2xl w-full shadow-lg">
            <h4 className="text-2xl font-bold mb-2 text-[#FFC107] text-center">Why Choose Passion Academy?</h4>
            <ul className="list-disc list-inside text-[#FFE082] text-base space-y-1 mt-2">
              <li>Expert & passionate faculty for every subject</li>
              <li>Personalized doubt-solving and mentoring</li>
              <li>Modern classrooms and digital resources</li>
              <li>Motivational seminars and holistic development</li>
              <li>Proven track record of results</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;

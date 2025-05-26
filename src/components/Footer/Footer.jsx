import React from 'react'
import paLogo from '../../assets/palogo.jpg'

function Footer() {
  return (
    <div>
      <footer
        className="border-t border-[#FFC107] pt-6" // Added pt-6 for top padding
        style={{
          background: 'linear-gradient(90deg, #2C007C 0%, #3B0A75 100%)',
        }}
      >
        <div className="mx-auto w-full max-w-screen-xl px-4 pb-6 lg:pb-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img src={paLogo} className="h-8 w-8 rounded-full me-2 border-2 border-[#FFC107]" alt="Passion Academy Logo" />
                <span className="self-center text-lg font-semibold whitespace-nowrap" style={{ color: '#FFC107' }}>Passion Academy</span>
              </a>
              <p className="mt-2 max-w-xs font-sans text-sm" style={{ color: '#FFE082' }}>
                Empowering students for academic excellence and competitive success. Join Passion Academy for expert coaching, modern facilities, and a supportive environment.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-4 sm:grid-cols-3">
              <div>
                <h2 className="mb-3 text-xs font-semibold uppercase font-sans" style={{ color: '#FFC107' }}>Courses</h2>
                <ul className="font-medium font-sans text-sm" style={{ color: '#FFE082' }}>
                  <li className="mb-2">
                    <span className="hover:underline">Class 6th-10th (CBSE/State)</span>
                  </li>
                  <li className="mb-2">
                    <span className="hover:underline">Class 11th-12th Science (PCM/PCB)</span>
                  </li>
                  <li>
                    <span className="hover:underline">IIT-JEE / NEET / Olympiad</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-3 text-xs font-semibold uppercase font-sans" style={{ color: '#FFC107' }}>Contact</h2>
                <ul className="font-medium font-sans text-sm" style={{ color: '#FFE082' }}>
                  <li className="mb-2">
                    <a href="tel:+911234567890" className="hover:underline" style={{ color: '#FFE082' }}>+91 12345 67890</a>
                  </li>
                  <li className="mb-2">
                    <a href="mailto:info@passionacademy.com" className="hover:underline" style={{ color: '#FFE082' }}>info@passionacademy.com</a>
                  </li>
                  <li>
                    <span className="hover:underline">123 Main Road, Your City</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-3 text-xs font-semibold uppercase font-sans" style={{ color: '#FFC107' }}>Quick Links</h2>
                <ul className="font-medium font-sans text-sm" style={{ color: '#FFE082' }}>
                  <li className="mb-2">
                    <a href="/about" className="hover:underline" style={{ color: '#FFE082' }}>About Us</a>
                  </li>
                  <li className="mb-2">
                    <a href="/admission" className="hover:underline" style={{ color: '#FFE082' }}>Admissions</a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:underline" style={{ color: '#FFE082' }}>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-[#FFC107] sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center" style={{ color: '#FFE082' }}>
              © {new Date().getFullYear()} <span className="font-semibold" style={{ color: '#FFC107' }}>Passion Academy</span>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="hover:text-[#FFC107]" style={{ color: '#FFE082' }}>
                <svg className="w-4 h-4" fill="#FFC107" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.36 0-4.28 1.92-4.28 4.28 0 .34.04.67.11.99C7.69 9.09 4.07 7.38 1.64 4.87c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.85 1.95 3.63-.72-.02-1.4-.22-1.99-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.12 2.9 3.99 2.93A8.6 8.6 0 0 1 2 19.54c-.65 0-1.28-.04-1.9-.11A12.13 12.13 0 0 0 6.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z"/>
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="ms-5 hover:text-[#FFC107]" style={{ color: '#FFE082' }}>
                <svg className="w-4 h-4" fill="#FFC107" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.06 8.24 8.93v-6.32h-2.48v-2.61h2.48v-1.99c0-2.45 1.49-3.8 3.67-3.8 1.06 0 2.18.19 2.18.19v2.4h-1.23c-1.21 0-1.59.75-1.59 1.52v1.68h2.7l-.43 2.61h-2.27v6.32c4.64-.87 8.24-4.52 8.24-8.93 0-5.5-4.46-9.96-9.96-9.96z"/>
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="ms-5 hover:text-[#FFC107]" style={{ color: '#FFE082' }}>
                <svg className="w-4 h-4" fill="#FFC107" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.058-1.281.32-2.393 1.301-3.374.981-.981 2.093-1.243 3.374-1.301C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.13 4.659.392 3.678 1.373c-.981.981-1.243 2.093-1.301 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.058 1.281.32 2.393 1.301 3.374.981.981 2.093 1.243 3.374 1.301C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.058 2.393-.32 3.374-1.301.981-.981 1.243-2.093 1.301-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.281-.32-2.393-1.301-3.374-.981-.981-2.093-1.243-3.374-1.301C15.668.013 15.259 0 12 0z"/>
                  <circle cx="12" cy="12" r="3.5"/>
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

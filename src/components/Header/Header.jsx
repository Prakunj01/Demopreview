import React from 'react'
import { Link } from 'react-router-dom'
import paLogo from '../../assets/palogo.jpg'

function Header() {
  return (
    <div>
      {/* Theme: Deep Purple/Royal Blue background, Golden Yellow highlights */}
      <nav
        className="border-b border-[#FFC107]"
        style={{
          background: 'linear-gradient(90deg, #2C007C 0%, #3B0A75 100%)',
        }}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={paLogo} className="h-9 w-9 rounded-full border-2 border-[#FFC107]" alt="Passion Academy Logo" />
            <span className="self-center text-2xl font-extrabold whitespace-nowrap" style={{ color: '#FFC107' }}>
              Passion Academy
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#FFC107] rounded-lg md:hidden hover:bg-[#3B0A75] focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
              <path stroke="#FFC107" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
            <ul className="flex flex-col font-semibold p-4 md:p-0 mt-4 border border-[#FFC107] rounded-lg bg-[#2C007C] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 rounded-sm md:p-0"
                  style={{
                    color: '#FFC107',
                    background: 'transparent',
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-[#FFC107] hover:bg-[#3B0A75] md:hover:bg-transparent md:border-0 md:hover:text-[#FFE082] md:p-0 md:w-auto"
                >
                  Dropdown
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                    <path stroke="#FFC107" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </button>
                <div id="dropdownNavbar" className="z-10 hidden font-normal bg-[#3B0A75] divide-y divide-[#FFC107] rounded-lg shadow-sm w-44">
                  <ul className="py-2 text-sm text-[#FFC107]" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-[#2C007C] hover:text-[#FFE082]">Dashboard</a>
                    </li>
                    <li aria-labelledby="dropdownNavbarLink">
                      <button
                        id="doubleDropdownButton"
                        data-dropdown-toggle="doubleDropdown"
                        data-dropdown-placement="right-start"
                        type="button"
                        className="flex items-center justify-between w-full px-4 py-2 hover:bg-[#2C007C] hover:text-[#FFE082]"
                      >
                        Dropdown
                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                          <path stroke="#FFC107" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                      </button>
                      <div id="doubleDropdown" className="z-10 hidden bg-[#3B0A75] divide-y divide-[#FFC107] rounded-lg shadow-sm w-44">
                        <ul className="py-2 text-sm text-[#FFC107]" aria-labelledby="doubleDropdownButton">
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-[#2C007C] hover:text-[#FFE082]">Overview</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-[#2C007C] hover:text-[#FFE082]">My downloads</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-[#2C007C] hover:text-[#FFE082]">Billing</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-[#2C007C] hover:text-[#FFE082]">Rewards</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-[#2C007C] hover:text-[#FFE082]">Earnings</a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-[#FFC107] hover:bg-[#2C007C] hover:text-[#FFE082]">Sign out</a>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 rounded-sm md:p-0 hover:text-[#FFE082]"
                  style={{
                    color: '#FFC107',
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded-sm md:p-0 hover:text-[#FFE082]" style={{ color: '#FFC107' }}>Pricing</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded-sm md:p-0 hover:text-[#FFE082]" style={{ color: '#FFC107' }}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header

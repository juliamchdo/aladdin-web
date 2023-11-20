import "../styles/header.css"
import logo from "../assets/logo.svg"
import { useState } from "react";

export function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const navOptions = [
    {id: 1, title: "Home", active: true},
    {id: 2, title: "Em aberto", active: false},
    {id: 3, title: "Finalizados", active: false},
  ]

  return (
    <div className="header-container header w-screen flex items-center justify-between py-8 pr-6 pl-6">
      
      <img className="logo" src={logo} alt="logo" />

      <nav>
        {/* mobile menu */}
        <section className="flex lg:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">

              {
                navOptions.map(option => {
                  return (
                    <li key={option.id} className="my-8 uppercase">
                      <a className="header-item" href="/about">{option.title}</a>
                    </li>
                  )
                })
              }

            </ul>
          </div>
        </section>

        {/* desktop menu */}
        <ul className="header-item hidden space-x-8 lg:flex">

          {
            navOptions.map(option => {
              return (
                <li key={option.id}>
                  <a href="/about">{option.title}</a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </div>
  )
}
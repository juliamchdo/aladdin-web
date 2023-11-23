import "../styles/header.css"
import logo from "../assets/logo.svg"
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const navOptions = [
    {id: 1, title: "Home", active: true, link: "/"},
    {id: 2, title: "Em aberto", active: false, link: "/aberto"},
    {id: 3, title: "Finalizados", active: false, link: "/finalizados"},
  ]

  return (
    <div className="header-container header w-screen flex items-center justify-between mb-10 py-8 pr-6 pl-6">
      
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
            <div className="flex flex-col items-center justify-between min-h-[250px]">

              {
                navOptions.map(option => {
                  return (
                    <Link to={option.link} key={option.id} className="my-8 uppercase header-item">
                      {option.title}
                    </Link>
                  )
                })
              }

            </div>
          </div>
        </section>

        {/* desktop menu */}
        <div className="header-item hidden space-x-8 lg:flex">

          {
            navOptions.map(option => {
              return (
                <Link to={option.link} key={option.id}>
                  {option.title}
                </Link>
              )
            })
          }
        </div>
      </nav>
    </div>
  )
}
import React from "react";
import img from '../assets/moonpig-logo.png'

// const SearchIcon = () => {
//   return (
//     <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28px" height="28px">
//       <path clipRule="evenodd" d="M11 2a9 9 0 1 0 3.88 17.123l5.777 5.777a3 3 0 0 0 4.243-4.243l-5.777-5.777A9 9 0 0 0 11 2zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0zm14.032 5.618a9.054 9.054 0 0 1-1.414 1.414l5.453 5.453a1 1 0 0 0 1.414-1.414z" fill="currentColor" fillRule="evenodd">
//       </path>
//     </svg>
//   )
// }

const Header = () => {
  return (
    <header>
      <div className="header-items">
      <img src={img} />
      <div className="search-icon">
        <input placeholder="Search for cards…" />
      </div>
      </div>
    </header>
  )
}

export default Header
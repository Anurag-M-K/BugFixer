import React from "react";
import "./css/Header.css";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InboxIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
function Header() {


  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <Link to='/'> 
          <img className="bugfixer-icon"
            src="https://res.cloudinary.com/dmvxmurxw/image/upload/v1673192608/download_j88afa.png"
            alt="logo"
            />
            </Link>

         <Link ><h3>Products</h3>
         </Link> 
        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-container">
            <Avatar  />
           
            <svg
            style={{margin:'8px'}}
              aria-hidden="true"
              className="svg-icon iconInbox"
              width="20"
              height="18"
              viewBox="0 0 20 18"
            >
              <path d="M4.63 1h10.56a2 2 0 0 1 1.94 1.35L20 10.79V15a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4.21l2.78-8.44c.25-.8 1-1.36 1.85-1.35Zm8.28 12 2-2h2.95l-2.44-7.32a1 1 0 0 0-.95-.68H5.35a1 1 0 0 0-.95.68L1.96 11h2.95l2 2h6Z"></path>
            </svg>
            <svg aria-hidden="true" className="svg-icon iconStackExchange" width="18" height="18" viewBox="0 0 18 18"><path d="M15 1H3a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 0 0 2-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
            <path d="M15 1H3a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 0 0 2-2v-2H1v2Zm16-7H1v4h16V6Z"></path>            </svg>
          
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

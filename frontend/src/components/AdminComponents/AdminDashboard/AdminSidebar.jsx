import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdLanguage, MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi, FaUsersCog } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscAccount, VscChromeClose, VscVmConnect } from "react-icons/vsc";

export default function Sidebar() {
    const [currentLink , setCurrentLink] = useState(1)
  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <VscVmConnect />
            <span>BugFixer</span>
          </div>
          <div className="toggle"></div>
          <div className="links">
            <ul> 
              <li onClick={()=>setCurrentLink(2)}  className={currentLink ===1 ? "active" : ""} >
                <a href="#">
                  <MdSpaceDashboard />
                  <span>Dashboard</span>
                </a>
              </li>
              <li className={currentLink ===1 ? "active" : ""} >
                <a href="#">
                  <FaUsersCog />
                  <span>Users</span>
                </a>
              </li>
              <li className={currentLink ===2 ? "active" : ""} >
                <a href="#">
                  <MdLanguage />
                  <span>Tags</span>
                </a>
              </li>
              <li className={currentLink ===3 ? "active" : ""} >
                <a href="#">
                  <GiTwirlCenter />
                  <span>Learnig centr</span>
                </a>
              </li>
              <li className={currentLink ===4 ? "active" : ""} >
                <a href="#">
                  <BsFillChatTextFill />
                  <span>FAQ</span>
                </a>
              </li>
              <li className={currentLink ===5 ? "active" : ""} >
                <a href="#">
                  <IoSettings />
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <a href="#">
            <FiLogOut />
            <span className="logout">Logout</span>
          </a>
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #ffc107;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #ffc107;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
      }
    }
  }

  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
`;

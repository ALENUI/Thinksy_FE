import React, { useEffect, useState } from "react";
import ThemeToggle from "../themeToggle";
import { Link } from "react-router";
import {
  Class,
  Close,
  Group,
  Menu,
  Person,
  Settings,
} from "@mui/icons-material";

export default function Navbar(props) {
  const profileMenu = [
    {
      label: "Friends and Groups",
      path: "",
      icon: <Group />,
    },
    {
      label: "Scheduled Session",
      path: "",
      icon: <Class />,
    },
    {
      label: "Account Settings",
      path: "",
      icon: <Settings />,
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isMenuOpen]);

  return (
    <>
      <div className="flex justify-between w-[90%] mx-auto mt-10 items-center">
        <div className="flex items-center justify-center gap-2">
          <img src="" className="w-12 h-12 bg-primary rounded-full" alt="" />
          <div className="text-2xl font-black"> ThinkSy</div>
        </div>
        <div className="tablet:flex items-center hidden gap-3">
          {props.links.map((link, i) => (
            <Link
              to={link.path}
              key={i}
              className=" uppercase hover:text-primary underline-offset-8 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Mobile view */}
        <div className=" tablet:hidden text-black dark:text-white">
          <div onClick={toggleMenu} className="scale-150 cursor-pointer">
            {isMenuOpen ? "" : <Menu />}
          </div>
        </div>
        {/* tablet view upwards */}
        <div className="tablet:flex hidden gap-5">
          <div className="border-r pr-5 group">
            <div className="relative ">
              <Person />
              <ul className="dark:bg-gray-600 bg-gray-900 text-white  group-hover:flex flex-col hidden  py-4 absolute w-50 right-0 ">
                {profileMenu.map((link, i) => (
                  <Link
                    key={i}
                    className="dark:hover:bg-black hover:bg-gray-600 p-2 flex items-center gap-2"
                    to={link.path}
                  >
                    {link.icon}
                    {link.label}{" "}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={`w-[95%] tablet:hidden h-full bg-blue-900 dark:bg-blue-950 fixed z-50 left-0 top-0 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform ease-in-out duration-500 pl-10  text-white`}
        >
          <div
            onClick={closeMenu}
            className="border rounded-full p-1 scale-125 absolute right-5 top-10 "
          >
            <Close />
          </div>
          <div className=" flex flex-col justify-between h-2/3 mt-10 ">
            <div className="flex items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-white"></div>
              <div className="flex flex-col gap-0">
                <h1 className="text-2xl font-black"> ThinkSy</h1>
                <p className="text-sm italic">Lorem ipsum dolor sit.</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-4 text-lg">
                {props.links.map((link, i) => (
                  <Link
                    to={link.path}
                    key={i}
                    className=" uppercase hover:text-primary underline-offset-8 hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col ml-4">
                {profileMenu.map((link, i) => (
                  <Link
                    key={i}
                    className="dark:hover:bg-black hover:bg-gray-600 p-2 flex items-center gap-2"
                    to={link.path}
                  >
                    {/* {link.icon} */}
                    {link.label}{" "}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div>
            <ThemeToggle />
          </div>
        </div>
      )}
    </>
  );
}

import React, { useEffect, useState } from "react";
import ThemeToggle from "../themeToggle";
import { Link } from "react-router";
import { Class, Group, Person, Settings } from "@mui/icons-material";

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

  const [profileMenuDisplay, setProfileMenuDisplay] = useState("hidden");
  useEffect(() => {
    onclick(() => {
      setProfileMenuDisplay = "";
    });
  });
  return (
    <>
      <div className="flex justify-between w-[90%] mx-auto mt-10 items-center">
        <div className="flex items-center justify-center gap-2">
          <img src="" className="w-12 h-12 bg-primary rounded-full" alt="" />
          <div className="text-2xl font-black"> ThinkSy</div>
        </div>
        <div className="flex items-center gap-3">
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
        <div className="flex gap-5">
          <div className="border-r pr-5">
            <div className="relative " onMouseEnter={profileMenuDisplay}>
              <Person />
              <ul className="dark:bg-gray-600  flex flex-col hidden  py-4 absolute w-50 right-0 mt-4">
                {profileMenu.map((link, i) => (
                  <Link
                    className="dark:hover:bg-black p-2 flex items-center gap-2"
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
    </>
  );
}

import React from "react";
import ThemeToggle from "../themeToggle";
import { Link } from "react-router";

export default function Navbar(props) {
  return (
    <>
      <div className="grid grid-cols-3 w-full items-center">
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
        <ThemeToggle />
      </div>
    </>
  );
}

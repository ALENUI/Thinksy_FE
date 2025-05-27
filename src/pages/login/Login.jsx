import React from "react";
import { Link } from "react-router";

export default function Login() {
  return (
    <>
      <div className="grid grid-cols-1 desktop:grid-cols-2 min-h-svh">
        <div className="hidden desktop:inline bg-red-500 w-full "></div>
        <div className="flex flex-col items-center justify-between gap-20 my-auto">
          <div className="flex flex-col  items-center w-sm tablet:w-md gap-3">
            <h1 className="text-4xl font-black">ThinkSy</h1>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              dicta at velit ipsa blanditiis, maiores voluptatem sequi ipsam
              sed, ad amet nam, repudiandae ea accusamus distinctio adipisci
              suscipit porro illum ab sint!
            </p>
          </div>
          <form className="flex flex-col w-sm tablet:w-md justify-center gap-7">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col  gap-1">
                <label
                  className="text-sm dark:text-gray-200 text-gray-400"
                  htmlFor="uname"
                >
                  Username/Email:
                </label>
                <input
                  id="uname"
                  type="text"
                  className="input-field"
                  // placeholder="Username/Email"
                />
              </div>
              <div className="flex flex-col  gap-1">
                <label
                  className="text-sm dark:text-gray-200 text-gray-400"
                  htmlFor="pwd"
                >
                  Password:
                </label>
                <input
                  id="pwd"
                  type="text"
                  className="input-field"
                  // placeholder="Password"
                />
              </div>
            </div>
            <button className="primary-btn ">LogIn</button>
            <div className="flex flex-col gap-2 border-t border-gray-400 pt-2 w-sm tablet:w-md">
              <h1 className="text-center">
                Or Login Using your accounts below{" "}
              </h1>
              <div className="flex items-center justify-center gap-4 ">
                <div className="w-12 h-12 bg-black rounded-full cursor-pointer "></div>
                <div className="w-12 h-12 bg-black rounded-full cursor-pointer "></div>
                <div className="w-12 h-12 bg-black rounded-full cursor-pointer "></div>
              </div>
            </div>
            <div className="border-t border-gray-400 pt-2 w-sm tablet:w-md">
              <p className="text-right">
                Dont have an Account yet?{" "}
                <Link className="underline" to="/signup">
                  SignUp here.
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

import React from "react";

export default function AccountInfo() {
  return (
    <>
      <div className="w-11/12  mx-auto desktop:w-1/2 px-10 bg-amber-50 h-[70vh]"></div>
      <div className="w-11/12 mt-10 justify-center desktop:w-1/2 mx-auto flex flex-col items-center">
        <div className="desktop:w-[90%] mx-auto text-center">
          <h1 className="heading1">Account Details</h1>
          <p>
            Pelase fill the form bellow accurately and most truthfully Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
            consequatur facere corrupti fuga pariatur quo aperiam, ut ea,
            doloremque explicabo culpa sed veniam dignissimos.
          </p>
        </div>
        <div className="desktop:w-[90%] w-full flex flex-col justify-center gap-3 mt-5 mx-auto border border-gray-600 rounded-2xl p-5">
          <div className="w-full">
            <label htmlFor="uname" className="input-label">
              Username:
            </label>
            <input
              type="text"
              className="input-field"
              placeholder="Username"
              id="uname"
              name="username"
            />
          </div>
          <div className="">
            <label htmlFor="pwd" className="input-label">
              Password
            </label>
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              id="pwd"
              name="password"
            />
          </div>
          <div className="">
            <label htmlFor="conPwd" className="input-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="input-field"
              placeholder="Confirm Password"
              id="conPwd"
              name="confirmPassword"
            />
          </div>
          <div>
            <label htmlFor="accRole" className="input-label">
              Account Role
            </label>
            <select name="accountRole" className="input-field" id="accRole">
              <option value="student">Student</option>
              <option value="mentor">Mentor</option>
            </select>
          </div>
          <div>
            <label htmlFor="bio" className="input-label">
              Bio/Short intro
            </label>
            <textarea
              className="input-field text-sm"
              id="bio"
              name="bio"
            ></textarea>
          </div>
          <div className="flex items-center justify-center gap-2">
            <input type="checkbox" name="" id="" />{" "}
            <label htmlFor="">I agree to the Terms & Conditions </label>
          </div>
        </div>
      </div>
    </>
  );
}

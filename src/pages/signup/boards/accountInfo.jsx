import React from "react";

export default function AccountInfo() {
  return (
    <>
      <div className="w-11/12 desktop:w-3xl mx-auto flex flex-col items-center">
        <div className="desktop:w-[90%]">
          <h1 className="heading1">Academic Details</h1>
          <p>
            Pelase fill the form bellow accurately and most truthfully Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
            consequatur facere corrupti fuga pariatur quo aperiam, ut ea,
            doloremque explicabo culpa sed veniam dignissimos.
          </p>
        </div>
        <form className="desktop:w-[90%] flex flex-col gap-3 mt-5 border border-gray-600 rounded-2xl p-5">
          <div>
            <label htmlFor="uname" className="input-label">
              Username:
            </label>
            <input type="text" className="input-field" placeholder="Username" />
          </div>
          <div className="">
            <label htmlFor="name" className="input-label">
              Password
            </label>
            <input
              type="password"
              className="input-field"
              placeholder="Password"
            />
          </div>
          <div className="">
            <label htmlFor="name" className="input-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="input-field"
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <label htmlFor="">Account Role</label>
            <select name="" className="input-field" id="">
              <option value="m">Student</option>
              <option value="f">Mentor</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Bio/Short intro</label>
            <textarea name="" className="input-field text-sm" id=""></textarea>
          </div>
          <div className="flex items-center justify-center gap-2">
            <input type="checkbox" name="" id="" />{" "}
            <label htmlFor="">I agree to the Terms & Conditions </label>
          </div>

          <div className=" flex justify-between items-center">
            <button className="primary-btn w-1/3">Previous</button>
            <button className="primary-btn w-1/3">Create Account</button>
          </div>
        </form>
      </div>
      <div className="w-11/12 desktop:w-1/2 px-10 bg-amber-50 h-[70vh]"></div>
    </>
  );
}

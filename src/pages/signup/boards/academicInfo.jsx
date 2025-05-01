import React, { useState } from "react";

export default function AcademicInfo() {
  const [eduLevel, setEduLevel] = useState("");
  return (
    <>
      <div className="w-11/12 desktop:w-1/2 px-10 bg-amber-50 h-[70vh]"></div>
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
          <div className="w-full">
            <label htmlFor="edulevel" className="input-label t">
              Level of Education:
            </label>
            <select
              name=""
              className="input-field"
              id="edulevel"
              onChange={(e) => setEduLevel(e.target.value)}
            >
              <option value=""> -- Choose Level --</option>
              <option value="secondary">Secondary Education</option>
              <option value="high">High School</option>
              <option value="university">University</option>
            </select>
          </div>
          <div>
            <label htmlFor="studyfield" className="input-label">
              Field of Study
            </label>
            {eduLevel == "secondary" && (
              <select className="input-field" name="" id="studyfield">
                <option value="">Arts</option>
                <option value="">Sciences</option>
              </select>
            )}
          </div>
          <div className="">
            <label htmlFor="name" className="input-label">
              nationality:
            </label>

            <select name="" className="input-field" id="">
              <option value="cmr">Cameroon</option>
              <option value="ngr">Nigeria</option>
              <option value="Gabon">Gabon</option>
              <option value="spain">Spain</option>
            </select>
          </div>
          <div>
            <label htmlFor="name" className="input-label">
              Contact Number:
            </label>
            <div className="flex gap-2">
              <select
                name=""
                className=" bg-gray-300 text-black rounded-xl "
                id=""
              >
                <option value="+237"> +237</option>
                <option value="+591">+591</option>
                <option value="+234">+234</option>
                <option value="+1">+1</option>
                <option value="+1">+1</option>
              </select>
              <input
                type="number"
                className="input-field"
                placeholder="0000000000000"
              />
            </div>
          </div>
          <div>
            <label htmlFor="dob" className="input-label">
              Date of Birth:
            </label>
            <input
              type="date"
              placeholder="sampleemail@host.domain"
              className="input-field"
            />
          </div>
          <div className=" flex justify-end">
            <button className="primary-btn w-1/3">NEXT</button>
          </div>
        </form>
      </div>
    </>
  );
}

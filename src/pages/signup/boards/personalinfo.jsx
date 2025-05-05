import React from "react";

export default function Personalinfo() {
  return (
    <>
      <div className="w-11/12 mx-auto desktop:w-1/2 px-10 bg-amber-50 h-[70vh]"></div>
      <div className="w-11/12 mt-10 justify-center desktop:w-1/2 mx-auto flex flex-col items-center">
        <div className="desktop:w-[90%] mx-auto text-center">
          <h1 className="heading1">Personal Details</h1>
          <p>
            Pelase fill the form bellow accurately and most truthfully Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
            consequatur facere corrupti fuga pariatur quo aperiam, ut ea,
            doloremque explicabo culpa sed veniam dignissimos.
          </p>
        </div>
        <div className="desktop:w-[90%] w-full flex flex-col justify-center gap-3 mt-5 mx-auto border border-gray-600 rounded-2xl p-5">
          <div className="w-full">
            <label className="input-label">Full Name:</label>
            <div className="flex items-center gap-3 w-full">
              <input
                className="input-field "
                type="text"
                name="firstName"
                placeholder="First Name"
              />
              <input
                className="input-field "
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="input-label">
              Email Address:
            </label>

            <input
              type="text"
              placeholder="sampleemail@host.domain"
              className="input-field"
              name="email"
              id="email"
            />
          </div>
          <div className="">
            <label htmlFor="gender" className="input-label">
              Gender:
            </label>

            <select name="gender" className="input-field" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="unknown">Can't Say</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="nationality" className="input-label">
              Nationality:
            </label>

            <select name="country" className="input-field" id="nationality">
              <option value="cmr">Cameroon</option>
              <option value="ngr">Nigeria</option>
              <option value="Gabon">Gabon</option>
              <option value="spain">Spain</option>
            </select>
          </div>
          <div>
            <label htmlFor="phone" className="input-label">
              Contact Number:
            </label>
            <div className="flex gap-2">
              <select
                name="code"
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
                name="phone"
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
              id="dob"
              name="dob"
            />
          </div>
        </div>
      </div>
    </>
  );
}

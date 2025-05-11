import React, { useState } from "react";

const steps = ["Personal Info", "Academic Info", "Account Info"];
export default function Signup() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    country: "",
    code: "",
    phone: "",
    dob: "",

    eduLevel: "",
    studyField: "",
    school: "",
    studPrefs: "",
    acadAchieves: "",

    username: "",
    password: "",
    confirmPassword: "",
    accountRole: "",
    bio: "",
    termAgree: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };
  const nextStep = () =>
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form Sbmitted: ", formData);
  };

  const [eduLevel, setEduLevel] = useState("");
  const [achievements, setAchievements] = useState([""]);

  const handleNewAchieve = () => {
    setAchievements([...achievements, ""]);
  };

  const handleAchieveChange = (index, value) => {
    const updated = [...achievements];
    updated[index] = value;
    setAchievements(updated);
  };
  return (
    <>
      <div className="tablet:w-2/3 mt-10 px-5 mx-auto text-center">
        <h1 className="heading1">Create Your account today...</h1>
        <p className="max-tablet:hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, at
          unde officia neque animi ullam error, sint quae odit maiores qui
          praesentium rem incidunt ipsa explicabo dolorem cupiditate dicta ipsum
          atque, nesciunt quia aliquam! Ab mollitia quasi quos similique
          voluptates labore consequatur?
        </p>
      </div>
      <div className="flex max-tablet:flex-col my-10 w-[95%] mx-auto items-center gap-10  min-h-[80vh]">
        <form onSubmit={handleSubmit}>
          <div className="tablet:flex  w-full items-center justify-center gap-5">
            {step === 0 && (
              <>
                <div className="w-11/12 mx-auto desktop:w-1/2 px-10 bg-amber-50 h-[70vh]"></div>
                <div className="w-11/12 mt-10 justify-center desktop:w-1/2 mx-auto flex flex-col items-center">
                  <div className="desktop:w-[90%] mx-auto text-center">
                    <h1 className="heading1">Personal Details</h1>
                    <p>
                      Pelase fill the form bellow accurately and most truthfully
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Praesentium consequatur facere corrupti fuga pariatur quo
                      aperiam, ut ea, doloremque explicabo culpa sed veniam
                      dignissimos.
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
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                        <input
                          className="input-field "
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
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
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="">
                      <label htmlFor="gender" className="input-label">
                        Gender:
                      </label>

                      <select
                        name="gender"
                        className="input-field"
                        id="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="unknown">Can't Say</option>
                      </select>
                    </div>
                    <div className="">
                      <label htmlFor="nationality" className="input-label">
                        Nationality:
                      </label>

                      <select
                        name="country"
                        className="input-field"
                        id="nationality"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      >
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
                          value={formData.code}
                          onChange={handleChange}
                          required
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
                          value={formData.phone}
                          onChange={handleChange}
                          required
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
                        value={formData.dob}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <div className="w-11/12  mx-auto desktop:w-1/2 px-10 bg-amber-50 h-[70vh]"></div>
                <div className="w-11/12 mt-10 justify-center desktop:w-1/2 mx-auto flex flex-col items-center">
                  <div className="desktop:w-[90%] mx-auto text-center">
                    <h1 className="heading1">Account Details</h1>
                    <p>
                      Pelase fill the form bellow accurately and most truthfully
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Praesentium consequatur facere corrupti fuga pariatur quo
                      aperiam, ut ea, doloremque explicabo culpa sed veniam
                      dignissimos.
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
                        value={formData.username}
                        onChange={handleChange}
                        required
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
                        value={formData.password}
                        onChange={handleChange}
                        required
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
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="accRole" className="input-label">
                        Account Role
                      </label>
                      <select
                        name="accountRole"
                        className="input-field"
                        id="accRole"
                        value={formData.accountRole}
                        onChange={handleChange}
                        required
                      >
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
                        value={formData.bio}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <label htmlFor="">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          checked={formData.termAgree}
                          onChange={handleChange}
                        />{" "}
                        I agree to the Terms & Conditions{" "}
                      </label>
                    </div>
                  </div>
                </div>
              </>
            )}
            {step === 1 && (
              <>
                <div className="w-11/12 mx-auto desktop:w-1/2 px-10 bg-amber-50 h-[70vh]"></div>
                <div className=" mx-5 mt-10 desktop:w-1/2  flex flex-col items-center">
                  <div className="desktop:w-[90%] max-tablet:text-center ">
                    <h1 className="heading1">Academic Details</h1>
                    <p>
                      Pelase fill the form bellow accurately and most truthfully
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Praesentium consequatur facere corrupti fuga pariatur quo
                      aperiam, ut ea, doloremque explicabo culpa sed veniam
                      dignissimos.
                    </p>
                  </div>
                  <div className="desktop:w-[90%] w-full flex flex-col gap-3 mt-5 border border-gray-600 rounded-2xl p-5">
                    <div className="w-full">
                      <label htmlFor="edulevel" className="input-label t">
                        Level of Education:
                      </label>
                      <select
                        name="eduLevel"
                        className="input-field"
                        id="edulevel"
                        onChange={
                          ((e) => setEduLevel(e.target.value), handleChange)
                        }
                        value={formData.eduLevel}
                        required
                      >
                        <option value=""> -- Choose Level --</option>
                        <option value="secondary">Secondary Education</option>
                        <option value="high">High School</option>
                        <option value="degree">Undergraduate</option>
                        <option value="masters">Post Graduate</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="studyfield" className="input-label">
                        Field of Study / Profession
                      </label>
                      {eduLevel == "" && (
                        <input type="text" className="input-field" />
                      )}
                      {eduLevel == "secondary" && (
                        <input
                          type="text"
                          value={("general", formData.studyField)}
                          className="input-field"
                          name="studyField"
                          id="studyfield"
                          onChange={handleChange}
                          required
                        />
                      )}
                      {eduLevel == "high" && (
                        <select
                          className="input-field"
                          name="studyField"
                          id="studyfield"
                          value={formData.studyField}
                          onChange={handleChange}
                          required
                        >
                          <option value="arts">Arts</option>
                          <option value="science">Sciences</option>
                        </select>
                      )}
                      {eduLevel == "university" && (
                        <select
                          className="input-field"
                          name="studyField"
                          id="studyfield"
                          value={formData.studyField}
                          onChange={handleChange}
                          required
                        >
                          <option value="computer">Computer Science</option>
                          <option value="maths">Mathematics</option>
                          <option value="phys">Physics</option>
                          <option value="econs">Economics</option>
                          <option value="philo">Philosophy </option>
                        </select>
                      )}
                    </div>
                    <div className="">
                      <label htmlFor="school" className="input-label">
                        Insitution/School:
                      </label>

                      <input
                        type="text"
                        className="input-field"
                        placeholder="Name of your Institution"
                        id="school"
                        name="school"
                        value={formData.school}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="studPreference" className="input-label">
                        Study Preference:
                      </label>
                      <select
                        className="input-field"
                        name="studPrefs"
                        id="studyfield"
                        value={formData.studPrefs}
                        onChange={handleChange}
                        required
                      >
                        <option value="group">Group Study</option>
                        <option value="solo">Solo Study</option>
                        <option value="peer">Peer Review</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="acadAchieves" className="input-label">
                        Academic Achievements (Optional)
                      </label>
                      {achievements.map((achieve, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 mb-2"
                        >
                          <textarea
                            className="input-field resize-none"
                            value={achieve}
                            onChange={
                              ((e) =>
                                handleAchieveChange(index, e.target.value),
                              handleChange)
                            }
                            required
                          ></textarea>
                          <button
                            type="button"
                            className="w-8 h-8 p-1 items-center justify-center flex bg-blue-900 text-white rounded-full text-xl"
                            onClick={handleNewAchieve}
                          >
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="flex justify-between w-1/2 mx-auto mt-10 ">
            {step > 0 && (
              <button onClick={prevStep} className="primary-btn w-1/3">
                Back
              </button>
            )}
            {step < steps.length - 1 ? (
              <button onClick={nextStep} className="primary-btn w-1/3">
                Next
              </button>
            ) : (
              <button type="submit" className="primary-btn w-1/3">
                Create Account
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

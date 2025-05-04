import React, { useState } from "react";

export default function AcademicInfo() {
  const [eduLevel, setEduLevel] = useState("");
  const [achievements, setAchievements] = useState([""]);

  const handleNewAchieve = () => {
    setAchievements([...achievements, ""]);
  };

  const handleChange = (index, value) => {
    const updated = [...achievements];
    updated[index] = value;
    setAchievements(updated);
  };
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
              <option value="university">Undergraduate</option>
              <option value="university">Post Graduate</option>
            </select>
          </div>
          <div>
            <label htmlFor="studyfield" className="input-label">
              Field of Study / Profession
            </label>
            {eduLevel == "" && <input type="text" className="input-field" />}
            {eduLevel == "secondary" && (
              <input
                type="text"
                value={"secondary Education"}
                className="input-field"
              />
            )}
            {eduLevel == "high" && (
              <select className="input-field" name="" id="studyfield">
                <option value="">Arts</option>
                <option value="">Sciences</option>
              </select>
            )}
            {eduLevel == "university" && (
              <select className="input-field" name="" id="studyfield">
                <option value="">Computer Science</option>
                <option value="">Mathematics</option>
                <option value="">Physics</option>
                <option value="">Economics</option>
                <option value="">Philosophy </option>
                <option value="">Economics</option>
              </select>
            )}
          </div>
          <div className="">
            <label htmlFor="name" className="input-label">
              Insitution/School:
            </label>

            <input
              type="text"
              className="input-field"
              placeholder="Name of your Institution"
            />
          </div>
          <div>
            <label htmlFor="name" className="input-label">
              Study Preference:
            </label>
            <select className="input-field" name="" id="studyfield">
              <option value="">Group Study</option>
              <option value="">Solo Study</option>
              <option value="">Peer Review</option>
              <option value="">Tutoring</option>
            </select>
          </div>
          <div>
            <label htmlFor="dob" className="input-label">
              Academic Achievements (Optional)
            </label>
            {achievements.map((achieve, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <textarea
                  className="input-field resize-none"
                  value={achieve}
                  onChange={(e) => handleChange(index, e.target.value)}
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
          <div className=" flex justify-between items-center">
            <button className="primary-btn w-1/3">Previous</button>
            <button className="primary-btn w-1/3">NEXT</button>
          </div>
        </form>
      </div>
    </>
  );
}

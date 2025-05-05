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
      <div className="w-11/12 mx-auto desktop:w-1/2 px-10 bg-amber-50 h-[70vh]"></div>
      <div className=" mx-5 mt-10 desktop:w-1/2  flex flex-col items-center">
        <div className="desktop:w-[90%] max-tablet:text-center ">
          <h1 className="heading1">Academic Details</h1>
          <p>
            Pelase fill the form bellow accurately and most truthfully Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
            consequatur facere corrupti fuga pariatur quo aperiam, ut ea,
            doloremque explicabo culpa sed veniam dignissimos.
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
              onChange={(e) => setEduLevel(e.target.value)}
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
            {eduLevel == "" && <input type="text" className="input-field" />}
            {eduLevel == "secondary" && (
              <input
                type="text"
                value={"general"}
                className="input-field"
                name="studyField"
                id="studyfield"
              />
            )}
            {eduLevel == "high" && (
              <select className="input-field" name="studyField" id="studyfield">
                <option value="arts">Arts</option>
                <option value="science">Sciences</option>
              </select>
            )}
            {eduLevel == "university" && (
              <select className="input-field" name="studyField" id="studyfield">
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
            />
          </div>
          <div>
            <label htmlFor="studPreference" className="input-label">
              Study Preference:
            </label>
            <select className="input-field" name="studPrefs" id="studyfield">
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
        </div>
      </div>
    </>
  );
}

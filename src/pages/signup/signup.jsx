import React, { useState } from "react";

import Personalinfo from "./boards/personalinfo";
import AcademicInfo from "./boards/academicInfo";
import AccountInfo from "./boards/accountInfo";

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
    agreed: false,
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
            {step === 0 && <Personalinfo />}
            {step === 1 && <AcademicInfo />}
            {step === 2 && <AccountInfo />}
          </div>
          <div className="flex justify-between w-1/2 mx-auto mt-10 ">
            {step > 0 && (
              <button
                type="button"
                onClick={prevStep}
                className="primary-btn w-1/3"
              >
                Back
              </button>
            )}
            {step < steps.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="primary-btn w-1/3"
              >
                Next
              </button>
            ) : (
              <button type="submit" className="primary-btn w-1/3">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

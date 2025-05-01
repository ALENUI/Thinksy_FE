import React, { useState } from "react";
import Joyride from "react-joyride";

import Personalinfo from "./boards/personalinfo";
import AcademicInfo from "./boards/academicInfo";

export default function Signup() {
  const steps = [
    {
      target: ".first",
      content: "This is the first step",
      placement: "top",
    },
    {
      target: ".second",
      content: "This is the second step",
      placement: "top",
    },
    {
      target: ".third",
      content: "This is the third step",
      placement: "top",
    },
    {
      target: ".fourth",
      content: "This is the fourth step",
      placement: "top",
    },
  ];

  const [run, setRun] = useState(false);
  const handleClickStart = () => {
    setRun(true);
  };
  return (
    <>
      <div className="tablet:w-2/3 mt-10 mx-auto text-center">
        <h1 className="heading1">Create Your account today...</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, at
          unde officia neque animi ullam error, sint quae odit maiores qui
          praesentium rem incidunt ipsa explicabo dolorem cupiditate dicta ipsum
          atque, nesciunt quia aliquam! Ab mollitia quasi quos similique
          voluptates labore consequatur?
        </p>
      </div>
      <div className="flex max-tablet:flex-col my-10 w-[95%] mx-auto items-center gap-10  min-h-[80vh]">
        {/* unboarding section */}
        {/* <div>
        <Joyride
          run={run}
          steps={steps}
          continuous={true}
          styles={{
            options: {
              arrowColor: "#e3ffeb",
              backgroundColor: "#e3ffeb",
              overlayColor: "rgba(79, 26, 0, 0.4)",
              primaryColor: "#000",
              textColor: "#004a14",
              width: 900,
              zIndex: 1000,
            },
          }}
          disableCloseOnEsc={true}
          hideCloseButton={true}
          showProgress={true}
        />
        <button onClick={handleClickStart}>Start</button>
      </div> */}
        {/* <Personalinfo /> */}
        <AcademicInfo />
      </div>
    </>
  );
}

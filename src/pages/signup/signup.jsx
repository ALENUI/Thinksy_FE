import React, { useState } from "react";
import Joyride from "react-joyride";

import Personalinfo from "./boards/personalinfo";

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
      <Personalinfo />
    </>
  );
}

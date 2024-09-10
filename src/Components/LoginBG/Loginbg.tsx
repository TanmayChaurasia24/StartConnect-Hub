import React from "react";
import { BackgroundLines } from "../ui/background-lines";
import { SignupFormDemo } from "../Login/Loginanimation";

export function BackgroundLinesDemo() {
  return (
    <div className="relative w-full h-screen"> {/* Relative positioning to contain absolute elements */}
      {/* Background lines */}
      <div className="absolute inset-0 z-0"> {/* Absolute positioning and lower z-index */}
        <BackgroundLines children={undefined} />
      </div>

      {/* Signup form on top of the background */}
      <div className="relative z-10 flex items-center justify-center h-full"> {/* Higher z-index and center the form */}
        <SignupFormDemo />
      </div>
    </div>
  );
}

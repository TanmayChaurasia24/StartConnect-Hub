"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function SignupFormDemo() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warnings, setWarnings] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  
  const handleLogin = () => {
    let emailWarning = "";
    let passwordWarning = "";

    if (!email) {
      emailWarning = "*Please enter your email";
    } else if (!validateEmail(email)) {
      emailWarning = "*Please enter a valid email address!";
    }

    if (!password) {
      passwordWarning = "*Please enter your password";
    }

    setWarnings({ email: emailWarning, password: passwordWarning });

    console.log("Email warning:", emailWarning);
    console.log("Password warning:", passwordWarning);

    if (!emailWarning && !passwordWarning && email && password) {
      console.log("Logging in with email:", email);
      navigate("/explore");
    }
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Star Connect Hub
      </h2>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" onChange={(e) => setEmail(e.target.value)}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" onChange={(e) => setPassword(e.target.value)}/>
        </LabelInputContainer>

      </form>
      <button
            className="bg-gradient-to-br relative group/btn ..."
            type="submit"
            onClick={() => {
              console.log("Login button clicked");
              handleLogin();
            }}
          >
            Login &rarr;
            <BottomGradient />
          </button>
    </div>
  );
}



const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};


const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block ..." />
      <span className="group-hover/btn:opacity-100 ..." />
    </>
  );
};

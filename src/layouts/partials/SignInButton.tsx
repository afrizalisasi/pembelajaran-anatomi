"use client"
import React from "react";
import { signIn } from "next-auth/react";

type Props = { text: string };

const SignInButton = ({ text }: Props) => { 
  return (
    <button
      className="btn btn-outline-primary btn-sm hidden lg:inline-block"
      onClick={() => {
        signIn("google").catch(console.error);
      }}
    >
      {text}
    </button>
  );
};
export default SignInButton;



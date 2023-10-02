"use client"
import React from "react";
import { signIn } from "next-auth/react";

type Props = { text: string };

const SignInButton = ({ text }: Props) => { 
  return (
    <button
      className="mr-5 btn btn-outline-primary lg:inline-block container mx-auto"
      onClick={() => {
        signIn("google").catch(console.error);
      }}
    >
      {text}
    </button>
  );
};
export default SignInButton;



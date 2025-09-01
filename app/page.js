"use client";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  const handleSignup = () => {
    redirect("/signup");
  };

  const handleSignin = () => {
    redirect("/signin");
  };

  return (
    <div>
      Home
      <br />
      <button onClick={handleSignup}>Signup</button>
      <button onClick={handleSignin}>Signin</button>
    </div>
  );
}

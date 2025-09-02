"use client";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleSignup = () => {
    router.push("/signup");
  };

  const handleSignin = () => {
    router.push("/signin");
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-[#0F2027] via-[#2C5364] to-[#2C5364]">
      Home
      <br />
      <button onClick={handleSignup}>Signup</button>
      <button onClick={handleSignin}>Signin</button>
    </div>
  );
}

import React from "react";

const page = async ({ params }) => {
  const course = await params.courses;
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-[#0F2027] via-[#2C5364] to-[#2C5364]">
      {course}
    </div>
  );
};

export default page;

import React from "react";

export default function Button({ text, onClick }) {
  return (
    <div className="cursor-pointer rounded-full text-white bg-[#bd9d60] w-fit py-4 px-14" onClick={onClick}>
      <p className="font-extrabold">{text}</p>
    </div>
  );
}

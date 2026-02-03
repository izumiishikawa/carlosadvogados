import React from "react";

export default function MembersCard({
  photo,
  quoteImage,
  name,
  oab,
  description,
  collaborators,
}) {
  return (
    <div className="w-full max-w-[350px] text-center items-center justify-center relative flex flex-col gap-2 px-4">
      <img
        src={photo}
        alt={`${name}'s photo`}
        className="w-48 h-48 sm:w-72 sm:h-72 rounded-full object-cover"
      />
      {quoteImage && (
        <img src={quoteImage} className="absolute -top-0 left-4 sm:left-2 w-14 sm:w-20" alt="Aspas" />
      )}
      <h1 className="font-extrabold uppercase mt-4 text-sm sm:text-base">{name}</h1>
      <p className="text-xs sm:text-sm text-left break-words whitespace-pre-wrap">
        <span className="font-semibold">{oab}</span>
        {description.split('\n').map((line, index) => (
          <span key={index} className="block mb-3 sm:mb-4">
            {line}
          </span>
        ))}
      </p>



      {collaborators && (
        <>
          <div className="h-[0.5px] bg-black w-full my-2" />
          {collaborators.map((collaborator, index) => (
            <p className="text-xs" key={index}>
              <b>{collaborator.name}</b> ({collaborator.oab})
            </p>
          ))}
        </>
      )}
    </div>
  );
}

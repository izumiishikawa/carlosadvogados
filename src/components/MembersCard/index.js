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
    <div className="max-w-96 text-center items-center justify-center relative flex flex-col gap-2">
      <img
        src={photo}
        alt={`${name}'s photo`}
        className="w-72 h-72 rounded-full"
      />
      {quoteImage && (
        <img src={quoteImage} className="absolute -top-0 left-2 w-20" />
      )}
      <h1 className="font-extrabold uppercase mt-4">{name}</h1>
      <p className="text-sm text-left break-words whitespace-pre-wrap">
  <span className="font-semibold">{oab}</span>
  {description.split('\n').map((line, index) => (
    <span key={index} className="block mb-4">
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

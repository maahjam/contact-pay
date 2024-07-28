import React from "react";
import { ContactType } from "../../types";
import { TRANSLATIONS } from "./constants";

interface Props {
  contact: ContactType;
}

export const Contact: React.FC<Props> = ({ contact }) => {
  return (
    <div className="flex flex-col justify-center items-center p-4 shadow-md bg-blue-300 rounded-md mb-4">
      <div className="flex justify-center items-center w-full">
        <img
          className="w-full h-full object-cover rounded-full"
          src={contact.avatar}
          alt="contact"
        />
      </div>
      <div className="flex justify-center items-center flex-col gap-2 w-full mt-4">
        <p className="font-bold text-xl">{contact.firstName}</p>
        <p>{contact.lastName}</p>
        <p>{contact.phone}</p>
        <p>{contact.address}</p>
      </div>
    </div>
  );
};

import React from "react";
import { ContactType } from "../../../../types/contact";
import { useNavigate } from "react-router";

interface Props {
  contact: ContactType;
}

export const Contact: React.FC<Props> = ({ contact }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/contacts/${contact.id}`);
  };

  return (
    <div
      className="flex flex-col justify-center items-center p-4 shadow-md bg-blue-300 rounded-md mb-4 cursor-pointer"
      onClick={handleContactClick}
    >
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

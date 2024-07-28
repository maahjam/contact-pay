import { useQuery } from "@tanstack/react-query";
import { fetchContactDetail } from "./api";
import { useParams } from "react-router-dom";

const ContactDetail: React.FC = () => {
  const { contactId } = useParams();

  const { data: contact } = useQuery({
    queryKey: ["contactDetail"],
    queryFn: () => fetchContactDetail(contactId as string),
  });
  return (
    <section className="bg-slate-100 flex justify-center items-center h-screen">
      <div className="flex flex-row justify-between items-center bg-blue-200 w-1/2 shadow-md rounded-md">
        <div className="flex flex-col justify-end items-center">
          <div className="w-full flex items-center justify-center">
            <img
              className="w-40 h-40 object-cover rounded-ful border-4 border-cyan-900"
              src={contact?.avatar}
              alt="contact"
            />
          </div>
          <p>{contact?.telegram}</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-2 w-full mt-4">
          <p className="font-bold text-xl">{contact?.firstName}</p>
          <p>{contact?.lastName}</p>
          <p>{contact?.phone}</p>
          <p>{contact?.address}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactDetail;

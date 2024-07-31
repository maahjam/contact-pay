import { useQuery } from "@tanstack/react-query";
import { fetchContactDetail } from "./api";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Loading from "@components/loading";
import ErrorMessage from "@components/error";

const ContactDetail: React.FC = () => {
  const { contactId } = useParams();

  const {
    data: contact,
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["contactDetail"],
    queryFn: () => fetchContactDetail(contactId as string),
  });

  useEffect(() => {
    refetch();
  }, [contactId]);


  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage errorMessage={error.message} />;

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center bg-green-200 w-full max-w-4xl shadow-md rounded-md">
        <div className="flex flex-col items-center w-full md:w-auto mb-4 md:mb-0 bg-green-400 p-4 md:rounded-tl-md md:rounded-bl-md">
          <div className="w-32 h-32 md:w-52 md:h-52 border-4 border-green-600 rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={contact?.avatar}
              alt="contact"
            />
          </div>
          <p className="text-zinc-600 font-medium mt-4">
            Telegram ID: {contact?.telegram || "Robot"}
          </p>
        </div>

        <div className="flex flex-col w-full md:flex-1 justify-around p-4 gap-10">
          <p className="font-bold text-2xl text-zinc-600 text-center">
            {contact?.firstName} {contact?.lastName}
          </p>
          <p className="mt-2 text-center text-md font-medium text-zinc-600">
            {contact?.note}
          </p>
          <div className="mt-4 flex flex-col items-center md:flex-row md:justify-between font-medium text-md text-zinc-600">
            <p className="mt-2">Phone: {contact?.phone}</p>
            <p className="mt-2">Company: {contact?.company}</p>
            <p className="mt-2">Email: {contact?.email || "robot@gmail.com"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetail;

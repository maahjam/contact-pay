import { ContactType } from "@type/contact";

const getContactDetailTransformer = (data: any): ContactType => {
  return {
    id: data.id,
    firstName: data.first_name,
    lastName: data.last_name,
    email: data.email,
    gender: data.gender,
    phone: data.phone,
    note: data.note,
    telegram: data.telegram,
    avatar: data.avatar,
    company: data.company,
    address: data.address,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };
};

export { getContactDetailTransformer };

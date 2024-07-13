import { RiContactsFill } from "react-icons/ri";
import ContactForm from "../../components/form/ContactForm";

const ContactUs = () => {
  return (
    <div className="flex flex-col space-y-5 lg:space-y-10">
      <div className="flex gap-2 text-3xl lg:text-5xl text-white">
        <RiContactsFill className="text-accent" />
        <h1 className="font-semibold">Get in Touch</h1>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactUs;

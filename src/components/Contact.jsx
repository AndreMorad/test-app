import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pd-20">
      <h1 className="my-10 text-4xl text-center ">Get in Touch</h1>
      <div className="tracking-tighter text-center">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;

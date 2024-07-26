import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";


const Contact_EnquiryForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const isFormFilled = () => {
    return (
      form.name !== "",
      form.number !== "",
      form.email !== "",
      form.message !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // template_jcen1o6

    emailjs
      .send(
        process.env.FORM_SERVICE_KEY,
        process.env.FORM_TEMPLATE_KEY,
        {
          from_name: form.name,
          from_contact: form.number,
          from_email: form.email,
          from_description: form.message,
        },
        process.env.FORM_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, Consulting person will contact you soon");

          setForm({
            name: "",
            email: "",
            number: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Try again later");
        }
      );
  };

  return (
    <form ref={formRef} className={`contact_form`}>
      <div>
        <div className="w-full flex flex-col justify-center items-center">
          <label
            className="pl-10 flex w-full text-black text-lg font-serif shadow-black drop-shadow-md font-normal p-2 "
            htmlFor="name"
          >
            Name
          </label>
          <input
            name="name"
            onChange={handleChange}
            value={form.name}
            className="w-full bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5 drop-shadow-lg shadow-black"
            id="name"
            type="name"
            placeholder="Full Name"
          />
          <label
            className="pl-10 flex w-full text-black text-lg font-serif shadow-black drop-shadow-md font-normal p-2 "
            htmlFor="email"
          >
            Email
          </label>
          <input
            name="email"
            onChange={handleChange}
            value={form.email}
            className="w-full bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5 drop-shadow-lg shadow-black"
            id="email"
            type="email"
            placeholder="Enter your Email Address"
          />
          <label
            className="pl-10 flex w-full text-black text-lg font-serif shadow-black drop-shadow-md font-normal p-2 "
            htmlFor="phoneNumber"
          >
            Contact
          </label>
          <input
            name="number"
            onChange={handleChange}
            value={form.number}
            className="w-full bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5 drop-shadow-lg shadow-black"
            id="number"
            type="number"
            placeholder="Enter your Contact Number"
          />

          <label
            className="pl-10 flex w-full text-black text-lg font-serif shadow-black drop-shadow-md font-normal p-2 "
            htmlFor="text"
          >
            Description
          </label>
          <input
            name="message"
            onChange={handleChange}
            value={form.message}
            className="w-full bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline p-5 drop-shadow-lg shadow-black"
            id="text"
            type=" text"
            placeholder="Description"
          />
        </div>
        <div className=" submit_button flex  w-full justify-center items-center mt-5">
          <button
            disabled={!isFormFilled()}
            onClick={handleSubmit}
            type="submit"
            className={`px-6 py-2 rounded-full backdrop-blur-lg bg-[#0B1D24]  text-lg transform hover:-translate-y-1 transition duration-400 text-white font-light`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact_EnquiryForm;

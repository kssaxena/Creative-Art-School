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
      form.name.trim() !== "" &&
      form.number !== "" &&
      form.email.trim() !== "" &&
      form.message.trim() !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (form.number.length != 10) {
      alert("Invalid Contact Number");
      return;
    }

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
            className="pl-10 flex w-full text-black lg:text-lg text-xs font-serif shadow-black drop-shadow-md font-normal p-2 "
            htmlFor="name"
          >
            Name
          </label>
          <input
            required={true}
            name="name"
            onChange={handleChange}
            value={form.name}
            className="lg:w-full w-3/4 bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline lg:p-5 p-2 drop-shadow-lg shadow-black text-xs lg:text-lg"
            id="name"
            type="name"
            placeholder="Full Name"
          />
          <label
            className="pl-10 flex w-full text-black lg:text-lg text-xs font-serif shadow-black drop-shadow-md font-normal p-2 "
            htmlFor="email"
          >
            Email
          </label>
          <input
            required={true}
            name="email"
            onChange={handleChange}
            value={form.email}
            className="lg:w-full w-3/4 bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline lg:p-5 p-2 drop-shadow-lg shadow-black text-xs lg:text-lg"
            id="email"
            type="email"
            placeholder="Enter your Email Address"
          />
          <label
            className="pl-10 flex w-full text-black lg:text-lg text-xs font-serif shadow-black drop-shadow-md font-normal p-2 "
            htmlFor="phoneNumber"
          >
            Contact
          </label>
          <input
            required={true}
            name="number"
            onChange={handleChange}
            value={form.number}
            className="lg:w-full w-3/4 bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline lg:p-5 p-2 drop-shadow-lg shadow-black text-xs lg:text-lg"
            id="number"
            type="number"
            placeholder="Enter your Contact Number"
          />

          <label
            className="pl-10 flex w-full text-black lg:text-lg text-xs font-serif shadow-black drop-shadow-md font-normal p-2 "
            htmlFor="text"
          >
            Description
          </label>
          <input
            required={true}
            name="message"
            onChange={handleChange}
            value={form.message}
            className="lg:w-full w-3/4 bg-gray-200 border-b-2 rounded-full text-black leading-tight focus:outline-none focus:shadow-outline lg:p-5 p-2 drop-shadow-lg shadow-black text-xs lg:text-lg"
            id="text"
            type=" text"
            placeholder="Description"
          />
        </div>
        <div className=" submit_button flex  w-full justify-center items-center mt-5">
          <button
            disabled={() => {
              // console.log("Function OK");
              return !isFormFilled();
            }}
            onClick={handleSubmit}
            type="submit"
            className={`lg:px-6 lg:py-2 px-2 py-1 rounded-full backdrop-blur-lg bg-[#0B1D24] lg:text-lg text-xs transform hover:-translate-y-1 transition duration-400 text-white font-light  flex justify-center items-center text-center`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact_EnquiryForm;

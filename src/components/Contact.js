import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hafy6bt",
        "template_58dd3q5",
        form.current,
        "RKWtSJcvt5UrkDZMT"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="w-full bg-gray-100 flex flex-col items-center px-4 py-10" id="contact">
      <h1 className="text-5xl font-bold text-red-500 mb-2 overflow-visible">Contact me</h1>
      <h2 className="text-2xl text-gray-600 mb-10 text-center">
        Questions, Thoughts, Or Just Want To Say Hello?
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-2xl flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          className="p-3 rounded-md shadow-md focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
          className="p-3 rounded-md shadow-md focus:outline-none"
        />
        <input
          type="text"
          name="subject"
          placeholder="Enter your subject"
          className="p-3 rounded-md shadow-md focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Enter your message"
          rows="6"
          required
          className="p-3 rounded-md shadow-md focus:outline-none"
        ></textarea>

        <button
          type="submit"
          className="btn-animated bg-richorange flex flex-row gap-3 items-center justify-center"
        >
          Send Message <span><FaPaperPlane /></span>
        </button>

        {sent && (
          <p className="text-green-600 font-semibold mt-2">
            Your message has been sent!
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;

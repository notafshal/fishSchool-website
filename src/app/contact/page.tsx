"use client";

import contact from "@/assets/contactmain.png";
import Map from "@/components/Map";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const contactUs = (e: any) => {
    e.preventDefault();
    if (!name) {
      setError("Name is missing");
    } else if (!email) {
      setError("Email is missing");
    } else if (!message) {
      setError("Message is missing");
    } else {
      alert(
        `Thank You for contacting us ${name}, Your Message has been sent. Please wait for response from out team`
      );
      console.log(error);
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <>
      <div className="mx-8 my-8  h-fit bg-slate-100 p-5 rounded-lg flex flex-col  ">
        <h2 className="font-extrabold text-2xl text-teal-700 text-center my-5">
          {" "}
          Let&apos;s Have a conversation{" "}
        </h2>
        <div className="flex flex-row justify-evenly ">
          <div>
            <p className="text-center my-4 text-white bg-red-500 rounded-lg">
              {error}
            </p>
            <form className="flex flex-col " onSubmit={contactUs}>
              <input
                value={name}
                onChange={(e: any) => {
                  setName(e.target.value);
                }}
                placeholder="   Name"
                className="my-2 p-2 rounded-full "
              />
              <input
                type="email"
                value={email}
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                placeholder="   Email"
                className="my-2 p-2 rounded-full"
              />
              <input
                type="textbox"
                value={message}
                onChange={(e: any) => {
                  setMessage(e.target.value);
                }}
                placeholder="Message"
                className="my-2 p-6 rounded-lg"
              />
              <button
                type="submit"
                className="my-2 bg-teal-700 text-white py-2 rounded-full hover:bg-teal-600"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <Image
              src={contact}
              alt="contact photo"
              className="h-96 w-96 rounded-full"
            />
          </div>
        </div>
      </div>
      <h1 className="text-lg font-bold text-center text-teal-700">Visit Us</h1>
      <Map />
    </>
  );
}

"use client";

import contact from "@/assets/contactmain.png";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const contactUs = (e: any) => {
    e.preventDefault();
    console.log("clicked");
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
            <form className="flex flex-col " onSubmit={contactUs}>
              <input placeholder="   Name" className="my-2 p-2 rounded-full " />
              <input placeholder="   Email" className="my-2 p-2 rounded-full" />
              <input placeholder="   Message" className="my-2 p-6 rounded-lg" />
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
    </>
  );
}

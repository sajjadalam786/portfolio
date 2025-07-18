"use client";

import React from "react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/2 p-20">
          <h1 className="text-[#00df9a]">Hello, Owners & Business Giants</h1>
          <h1 className="text-2xl font-bold text-justify">
            I&apos;M - Not just a developer, but your digital growth partner -
            together we build empires!
          </h1>
          <br />
          <p>
            Don&apos;t just take my word for it - let&apos;s start with a trial
            project and let results speak louder than promises!
          </p>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="flex gap-15 mb-10">
              <label htmlFor="name">Name:</label>
              <input
                className="border border-[#00df9a] w-full p-3"
                type="text"
                id="name"
                placeholder="Enter your name "
              />
            </div>
            <div className="flex gap-15 mb-10">
              <label htmlFor="email">Email:</label>
              <input
                className="focus:outline-[#00df9a] border border-[#00df9a] w-full p-3"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="flex gap-12 mb-10">
              <label htmlFor="Mobile">Mobile:</label>
              <input
                className="focus:outline-[#00df9a] border border-[#00df9a] w-full p-3"
                type="text"
                placeholder="Enter Your Mobile Number"
              />
            </div>
            <div className="mb-10">
              <label htmlFor="Message" className="block text-xl font-bold mb-5">
                Your Vision - My Efforts
              </label>
              <textarea
                rows={5}
                className="w-full border border-[#00df9a] pl-5 py-10"
                placeholder="Share Your Vision So i Can Prepare My Plan according to the Your Business or Future Goals"
              />
            </div>
            <div>
              <button className="bg-[#00df9a] text-white px-10 py-3 rounded-md capitalize ">
                <b>
                  {" "}
                  <span className="text-2xl text-stroke-2 text-stroke-[#000000]">
                    {" "}
                    Hire me..
                  </span>{" "}
                  to build both&apos;s future...
                </b>
              </button>
            </div>
          </form>
        </div>

        <div className="w-1/2 p-20">
          <h1>Contact Info</h1>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Main St, City, Country</p>
          <button>Send Message</button>
        </div>
      </div>
    </>
  );
}

"use client";
import { handleSubmit } from "../actions";
import { useState, useEffect } from "react";

export default function ShortenWidget() {
  const [submittedOnce, setSubmittedOnce] = useState(false);
  const [validity, setValidity] = useState(false);

  const regex =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

  const handleSubmit = (e) => {
    if (!submittedOnce) setSubmittedOnce(true);
  };

  const handleChange = (e) => {
    const input = document.querySelector("#urlInput");
    if (input.value.length === 0 && submittedOnce) {
      setValidity(false);
    } else if (regex.test(input.value)) {
      setValidity(true);
    }
    // if (input.value.length > 0 && regex.test(input.value) setValidity(true);
    // if (submittedOnce && input.value !== "" && regex.test(input.value)) setValidity(true)
  };

  return (
    <section className="SearchWidget p-6 md:p-12 bg-p-violet-dark max-w-[1100px] w-full rounded-lg bg-cover bg-no-repeat bg-center bg-[url('/images/bg-shorten-mobile.svg')] md:bg-[url('/images/bg-shorten-desktop.svg')]">
      <form
        action={handleSubmit}
        className="relative flex flex-col md:flex-row gap-10 md:gap-5"
      >
        <input
          type="text"
          id="urlInput"
          placeholder="Shorten a link here..."
          className={`peer h-10 md:h-12 rounded-lg px-3 lg:px-7 py-4 w-full ${
            (!validity && submittedOnce) && "outline-s-red outline outline-[3px]"
          } text-n-violet-vdark`}
          onChange={handleChange}
        />
        <p
          className={`absolute h-4 bottom-1/2 md:-bottom-6 text-sm ${
            (!validity && submittedOnce) ? "visible" : "invisible"
          } text-s-red select-none`}
        >
          Please add a valid link
        </p>
        <button
          type="submit"
          onClick={() => handleSubmit()}
          className="h-10 md:h-12 flex items-center justify-center bg-p-cyan text-white w-full md:w-[10rem] rounded-lg font-bold hover:saturate-50 hover:brightness-150 active:filter-none focus:saturate-50 focus:brightness-150"
        >
          Shorten It!
        </button>
      </form>
    </section>
  );
}

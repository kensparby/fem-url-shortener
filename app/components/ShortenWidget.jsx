"use client";
import { fetchShortURL } from "../actions";
import { useState, useEffect } from "react";
import ShortCode from "./ShortCode";

export default function ShortenWidget() {
  const [submittedOnce, setSubmittedOnce] = useState(false);
  const [validity, setValidity] = useState(false);
  const [shortCodeElements, setShortCodeElements] = useState([]);
  const [urlInput, setUrlInput] = useState("");
  const [buttonState, setButtonState] = useState(false);

  const regex =
    /^(https?:\/\/)?(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

  const handleSubmit = async (e) => {
    if (urlInput === "") {
      setValidity(false);
    }
    if (!submittedOnce) setSubmittedOnce(true);
    if (urlInput.length != "" && validity) {
      setButtonState(true);
      const { result } = await fetchShortURL(urlInput);
      setShortCodeElements([
        <ShortCode
          key={shortCodeElements.length}
          submittedUrl={result.original_link}
          url={result.full_short_link}
        />,
        ...shortCodeElements,
      ]);
    }
  };

  // useEffect(() => {
  //     let timeout;

  //     if (buttonText !== "Copy") {
  //       timeout = setTimeout(() => {
  //         setButtonText("Copy");
  //       }, 1000);
  //     }

  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }, [buttonText]);

  useEffect(() => {
    let timer;
    if (buttonState) {
      timer = setTimeout(() => {
        setButtonState(false);
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [buttonState]);

  const handleInputChange = ({ target }) => {
    setUrlInput(target.value);
    if (target.value === 0 && submittedOnce) {
      setValidity(false);
    } else if (regex.test(target.value)) {
      setValidity(true);
    }
  };

  return (
    <>
      <section className="SearchWidget w-full p-6 md:p-12 bg-p-violet-dark max-w-[1100px] rounded-lg bg-cover bg-no-repeat bg-center bg-[url('/images/bg-shorten-mobile.svg')] md:bg-[url('/images/bg-shorten-desktop.svg')]">
        <form
          action={handleSubmit}
          className="relative flex flex-col md:flex-row gap-10 md:gap-5"
        >
          <input
            onChange={handleInputChange}
            name="urlInput"
            type="text"
            value={urlInput}
            placeholder="Shorten a link here..."
            className={`peer h-10 md:h-12 rounded-lg px-3 lg:px-7 py-4 w-full ${
              !validity &&
              submittedOnce &&
              "outline-s-red outline outline-[3px]"
            } text-n-violet-vdark`}
          />
          <p
            className={`absolute h-4 bottom-1/2 md:-bottom-6 text-sm ${
              !validity && submittedOnce ? "visible" : "invisible"
            } text-s-red select-none`}
          >
            Please add a valid link
          </p>
          <button
            disabled={buttonState}
            type="submit"
            id="test"
            className="h-10 md:h-12 flex items-center justify-center bg-p-cyan text-white w-full md:w-[10rem] rounded-lg font-bold hover:saturate-50 hover:brightness-150 active:filter-none focus:saturate-50 focus:brightness-150 disabled:grayscale"
          >
            Shorten It!
          </button>
        </form>
      </section>
      <section className="shortcodes w-full z-10">{shortCodeElements}</section>
    </>
  );
}

import Hero from "./components/Hero";
import ShortenWidget from "./components/ShortenWidget";
import Statistics from "./components/Statistics";

export default function Home() {
  return (
    <div className="wrapper-hero w-screen flex flex-col items-center bg-white bg-[position:1.25rem_0] lg:bg-[position:calc(50%+25rem)_3rem] bg-[length:135%] lg:bg-[length:45rem] bg-no-repeat bg-[url('/images/illustration-working.svg')]">
      <section className="w-full max-w-[1100px] px-5">
        <Hero />
      </section>
      <section className="w-full bg-[#f0f1f6]">
        <div className="w-full max-w-[1100px] flex flex-col items-center mx-auto -mt-20 px-5 transition-all">
          <ShortenWidget />
          <Statistics />
        </div>
      </section>
    </div>
  );
}

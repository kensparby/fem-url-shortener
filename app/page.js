import Hero from "./components/Hero";
import ShortenWidget from "./components/ShortenWidget";
import Statistics from "./components/Statistics";

export default function Home() {
  return (
    <div className="wrapper-hero w-screen flex flex-col items-center bg-white">
      <section className="w-full max-w-[1100px] px-5 bg-[position:1.25rem_0] lg:bg-[position:250%_0] bg-[length:135%] lg:bg-[length:80%] bg-no-repeat bg-[url('/images/illustration-working.svg')] z-10">
        <Hero />
        <ShortenWidget />
      </section>
      <Statistics />
    </div>
  );
}

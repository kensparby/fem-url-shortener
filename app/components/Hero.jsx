import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col max-w-[1100px] lg:min-h-[30rem] items-center lg:items-start text-center lg:text-left lg:justify-center relative pt-[100vw] lg:pt-28 gap-4 pb-20">
      <h1 className="text-4xl lg:text-7xl lg:max-w-[60%] text-n-violet-vdark font-bold tracking-tight lg:leading-[5rem]">More than just shorter links</h1>
      <p className="text-n-violet-gray lg:max-w-[50%] lg:text-lg">
        Build your brand&apos;s recognition and get detailed insights on how
        your links are performing.
      </p>
      <a href={null} className="text-white cursor-pointer text-lg font-bold capitalize rounded-full px-10 py-3 bg-p-cyan hover:saturate-50 hover:brightness-150 active:filter-none focus:saturate-50 focus:brightness-150">Get started</a>
    </section>
  );
}

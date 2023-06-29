export default function CallToAction() {
  return (
    <section className="CTA flex flex-col items-center gap-5 md:gap-6 text-white bg-p-violet-dark py-20 md:p-12 bg-mobile md:bg-desktop bg-cover bg-no-repeat bg-center self-stretch">
      <h2 className="text-2xl md:text-4xl font-bold">Boost your links today</h2>
      <a
        href={null}
        className="cursor-pointer text-lg font-bold capitalize rounded-full px-10 py-3 bg-p-cyan hover:saturate-50 hover:brightness-150 active:filter-none focus:saturate-50 focus:brightness-150"
      >
        Get started
      </a>
    </section>
  );
}

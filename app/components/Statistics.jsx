import Stat from "./Stat";

export default function Statistics() {
  const statData = [
    {
      id: 0,
      header: { __html: "Brand Recognition" },
      body: {
        __html:
          "Boost your brand recognition with each click. Generic links don&apos;t mean a thing. Branded links help instil confidence in your content.",
      },
    },
    {
      id: 1,
      header: { __html: "Detailed Records" },
      body: {
        __html:
          "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decitions.",
      },
    },
    {
      id: 2,
      header: { __html: "Fully Customizable" },
      body: {
        __html:
          "Improve brand awareness and content discoverability through customizable links, super&shy;charging audience engagement.",
      },
    },
  ];

  const mapData = statData.map((stat) => {
    return <Stat key={stat.id} header={stat.header} body={stat.body} />;
  });

  return (
    <section className="Statistics flex flex-col gap-6 py-20 items-center text-center w-full pt-40 -mt-20 md:-mt-16">
      <h2 className="text-2xl lg:text-4xl font-bold text-n-violet-vdark">
        Advanced Statistics
      </h2>
      <p className="text-n-violet-gray text-sm leading-6 max-w-[50ch]">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="relative flex flex-col lg:flex-row max-w-[1100px] items-center lg:items-start lg:gap-8">
        <span className="decorative bg-p-cyan w-2 h-2/3 absolute m-auto top-1/4 lg:top-1/2 lg:left-1/4 lg:h-2 lg:w-1/2"></span>
        {mapData}
      </div>
    </section>
  );
}

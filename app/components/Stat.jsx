import Image from "next/image";
export default function Stat({ header, body }) {
  const icon = header.__html.toLowerCase().split(" ").join("-");

  return (
    <div className="Stat rounded-md bg-white text-n-violet-gray flex flex-col items-center gap-4 text-sm leading-6 relative pt-20 pb-10 px-6 mt-16 max-w-md lg:max-w-[35ch] lg:text-left lg:items-start lg:[&:nth-of-type(2)]:mt-[7rem] lg:[&:nth-of-type(3)]:mt-[10rem]">
      <div className="rounded-full overflow-hidden absolute -top-[45px]">
        <Image
          alt=""
          src={`/images/icon-${icon}.svg`}
          width="90"
          height="90"
          className="bg-p-violet-dark p-6"
        />
      </div>
      <h3
        dangerouslySetInnerHTML={header}
        className="text-xl font-bold text-n-violet-vdark"
      ></h3>
      <p dangerouslySetInnerHTML={body} className="hyphens-manual"></p>
    </div>
  );
}

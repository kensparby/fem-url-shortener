import Logo from "./Logo";
import Socials from "./Socials";

export default function Footer() {
  const linkData = {
    features: ["link shortening", "branded links", "analytics"],
    resources: ["blog", "developers", "support"],
    company: ["about", "our team", "careers", "contact"],
  };

  const mapLinks = (data) => {
    const linkGroup = Object.keys(data).map((category) => {
      const links = data[category].map((link) => {
        return (
          <li key={link}>
            <a
              href={null}
              className="text-sm text-n-gray hover:text-p-cyan cursor-pointer"
            >
              {link}
            </a>
          </li>
        );
      });
      return (
        <>
          {/* <h3 className="font-bold mb-2 text-sm">{category}</h3> */}
          <ul
            key={category}
            data-header={category}
            aria-label={category}
            className="flex flex-col gap-3 relative before:content-[attr(data-header)] before:text-sm before:font-bold before:mb-2"
          >
            {links}
          </ul>
        </>
      );
    });

    return linkGroup;
  };

  return (
    <div className="wrapper bg-n-violet-vdark mt-auto self-stretch">
      <footer className="bg-n-violet-vdark text-white flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left p-10 lg:p-0 lg:py-14 gap-10 lg:justify-between max-w-[1100px] mx-auto">
        <Logo fill="#ffffff" width="130" />
        <nav className="links flex flex-col md:flex-row gap-10 md:gap-20 capitalize">
          {mapLinks(linkData)}
        </nav>
        <Socials />
      </footer>
    </div>
  );
}

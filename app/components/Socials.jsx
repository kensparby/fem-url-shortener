import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

export default function Socials() {
  return (
    <div className="Socials flex flex-row gap-5 text-2xl">
      <a className="cursor-pointer" href={null}>
        <FaFacebookSquare className="fill-white hover:fill-p-cyan" />
      </a>
      <a className="cursor-pointer" href={null}>
        <FaTwitter className="fill-white hover:fill-p-cyan" />
      </a>
      <a className="cursor-pointer" href={null}>
        <FaPinterest className="fill-white hover:fill-p-cyan" />
      </a>
      <a className="cursor-pointer" href={null}>
        <FaInstagram className="fill-white hover:fill-p-cyan" />
      </a>
    </div>
  );
}

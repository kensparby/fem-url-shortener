import { FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function Socials() {
    return (
    <div className="Socials flex flex-row gap-5 text-2xl">
        <Link href="https://facebook.com">
            <FaFacebookSquare className="fill-white hover:fill-p-cyan" />
        </Link>
        <Link href="https://twitter.com">
            <FaTwitter className="fill-white hover:fill-p-cyan" />
        </Link>
        <Link href="https://pinterest.com">
            <FaPinterest className="fill-white hover:fill-p-cyan" />
        </Link>
        <Link href="https://instagram.com">
            <FaInstagram className="fill-white hover:fill-p-cyan" />
        </Link>
    </div>
    );
}
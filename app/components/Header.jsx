"use client";
import { useState } from "react";
import Logo from "./Logo";
// import { FaBars } from 'react-icons/fa';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';


export default function Header() {
  const [menuToggleStatus, setMenuToggleStatus] = useState(false);

  const handleMenuToggle = (e) => {
    setMenuToggleStatus(!menuToggleStatus);
  }
  
  return (
    <section className="header-wrapper w-screen flex flex-col items-center bg-white z-20">
      <header className="w-full max-w-[1100px] flex flex-row justify-between p-5 pt-8">
        <Logo />
        <i onClick={handleMenuToggle} className="hamburger text-2xl text-n-violet-gray md:hidden">
          {menuToggleStatus ? <RxCross1 /> : <RxHamburgerMenu />}
        </i>
      </header>
      <div
        className={`modal-menu ${menuToggleStatus ? "block" : "hidden"} md:hidden fixed top-20 w-[90dvw] max-w-sm flex flex-col items-stretch text-white font-bold text-center bg-p-violet-dark rounded-lg py-10 px-6 backdrop-contrast-50`}
      >
        <ul className="flex flex-col gap-2 items-stretch">
          <li className="flex"><a href={null} className="cursor-pointer flex-1 py-2 rounded-full hover:bg-p-violet-dark hover:saturate-50 hover:brightness-150 active:filter-none focus:saturate-50 focus:brightness-150">Features</a></li>
          <li className="flex"><a href={null} className="cursor-pointer flex-1 py-2 rounded-full hover:bg-p-violet-dark hover:saturate-50 hover:brightness-150 active:filter-none focus:saturate-50 focus:brightness-150">Pricing</a></li>
          <li className="flex"><a href={null} className="cursor-pointer flex-1 py-2 rounded-full hover:bg-p-violet-dark hover:saturate-50 hover:brightness-150 active:filter-none focus:saturate-50 focus:brightness-150">Resources</a></li>
          <hr className="h-px border-0 bg-p-violet-dark opacity-50 brightness-200" />
          <li className="flex"><a href={null} className="cursor-pointer flex-1 py-2 rounded-full hover:bg-p-violet-dark hover:saturate-50 hover:brightness-150 active:filter-none focus:saturate-50 focus:brightness-150">Login</a></li>
          <li className="flex"><a href={null} className="cursor-pointer flex-1 py-2 bg-p-cyan rounded-full hover:saturate-50 hover:brightness-150 active:filter-none focus:saturate-50 focus:brightness-150">Sign Up</a></li>
        </ul>
      </div>
    </section>
  );
}
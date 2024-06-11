import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { IconInstagram, IconWhatsapp, IconEmail } from "./icons";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <div className="w-full h-40 bg-white sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-20">
          <Logo />
        </div>
        <div className="flex justify-between items-center h-20">
          <Logo />
          <button
            type="button"
            className="inline-flex items-center md:hidden"
            onClick={toggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="#817886"
                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
              />
            </svg>
          </button>
          <ul className="hidden md:flex gap-x-6 text-white ">
            <li>
              <Link href="/about">
                <p className="font-alice text-mj-purple text-mj-purple">
                  MONJOUR
                </p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p className="font-alice text-mj-purple">QUIENES SOMOS</p>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <p className="font-alice text-mj-purple">SERVICIOS</p>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <p className="font-alice text-mj-purple">CONTACTO</p>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <p className="font-alice text-mj-purple">ESPACIOS</p>
              </Link>
            </li>
          </ul>
          <div className="hidden md:block">
            <button>
              <IconWhatsapp />
            </button>
            <button>
              <IconInstagram />
            </button>
            <button>
              <IconEmail />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

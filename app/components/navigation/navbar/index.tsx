import { useEffect, useState } from "react";

import Link from "next/link";
import Logo from "./Logo";
import { IconInstagram, IconWhatsapp, IconEmail } from "../icons";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  return (
    <div className="w-full bg-white sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className=" hidden md:flex items-center h-20">
          <img // eslint-disable-line @next/next/no-img-element
            className="mx-auto hidden md:flex"
            src="/monjour-logo-header.png"
            width={width < 1024 ? "0" : "250"}
            height={width < 1024 ? "0" : "20"}
            alt="Logo de monjour."
          />
        </div>
        <div className="flex justify-between items-center h-20">
          <div className="flex md:hidden">
            {" "}
            <Logo />
          </div>

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
          <ul className="hidden md:flex mx-auto gap-x-6 text-white ">
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
          <div className="hidden md:flex">
            <a className=" px-2" href="https://wa.link/jj6zna">
              <IconWhatsapp />
            </a>
            <a className=" px-2" href="https://www.instagram.com/monjour.eventos">
              <IconInstagram />
            </a>
            <a className=" px-2 " href="mailto:sandra@monjour.es">
              <IconEmail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

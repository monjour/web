import Link from "next/link";
import { IconInstagram, IconWhatsapp, IconEmail } from "../icons";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <div
      className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
      style={{
        opacity: `${isOpen ? "1" : "0"}`,
        top: ` ${isOpen ? "0" : "-100%"}`,
      }}
    >
      <button className="absolute right-0 p-5" onClick={toggle}>
        {/* Close icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          />
        </svg>
      </button>

      <ul className="sidebar-nav text-center leading-relaxed text-xl">
        <li>
          <Link href="/about">
            <p className="font-alice text-mj-purple text-mj-purple">MONJOUR</p>
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
      <div className="flex">
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
  );
};

export default Sidebar;

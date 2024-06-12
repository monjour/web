"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
const Logo = () => {
  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  return (
    <>
      <Link href="/" style={{ display: showButton ? "none" : "block" }}>
        <img // eslint-disable-line @next/next/no-img-element
          src="/monjour-logo-header.png"
          alt="Logo"
          width="150"
          height="46"
          className="relative"
        />
      </Link>
      <div
        style={{
          display: showButton ? "block" : "none",
        }}
      >
      </div>
    </>
  );
};

export default Logo;
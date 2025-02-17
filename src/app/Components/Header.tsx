import React from "react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <div
      className="flex justify-between items-end px-8 py-4 h-20"
      style={{ backgroundColor: "#65844A", color: "#E3E7D3" }}
    >
      <div>
        <div className="flex gap-4 text-2xl items-end">
          <Image src="/White-Text.png" alt="Casa Cangalha" width={200} height={200} />
          {/* <Link href="/" >Casa Cangalha</Link> */}
        </div>
      </div>
      <div className="flex gap-4 -mb-1.5">
        <Link href="/calendar">Calendar</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/support">Support</Link>
      </div>
    </div>
  );
};

export default Header;

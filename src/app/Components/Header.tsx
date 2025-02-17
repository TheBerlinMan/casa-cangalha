import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div
      className="flex justify-between items-end py-4 px-8"
      style={{ backgroundColor: "#65844A", color: "#E3E7D3" }}
    >
      <div>
        <div className="text-2xl font-bold">
          <Link href="/">Casa Cangalha</Link>
        </div>
      </div>
      <div className="flex gap-4">
        <Link href="/calendar">Calendar</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/support">Support</Link>
      </div>
    </div>
  );
};

export default Header;

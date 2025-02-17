import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <hr className="border-t border-gray-300" />
      <div className="flex flex-col gap-2 py-4 px-8">
        <div className="flex justify-between items-start ">
          <div className="flex flex-col gap-4">
            <div>Casa Cangalha</div>
            <p className="text-md max-w-sm">
              Casa Cangalha is a place where you can find the best of the best
              in the world of music.
            </p>
            <div className="flex gap-4">
              <Link href="/">Mission</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
              <Link href="/">Support</Link>
              <Link href="/">Admin</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>Casa Cangalha</div>
            <div> 1 Cangalha, 1000, Portugal</div>
            <div>info@casa-cangalha.com</div>
            <div>+351 912 345 678</div>
            <div>
              Follow us on social media
              <div>Instagram</div>
            </div>
          </div>
        </div>
        <div>
          <p>All rights reserved © Casa Cangalha</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
// All rights reserved © Casa Cangalha

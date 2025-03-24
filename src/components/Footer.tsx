"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  const path = usePathname();
  const adminPath = "/admin";

  if (path.startsWith(adminPath)) return;

  return (
    <div style={{ backgroundColor: "#65844A", boxShadow: "0 -4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
      <hr className="border-t border-gray-300 mb-2" />
      <div className="flex gap-20 py-4 px-8 mr-16 mb-8">
        <div>
          <div className="font-bold mb-5 max-w-xs text-gray-100">Casa Cangalha</div>
          <div className="max-w-xs text-sm text-gray-300 mb-6">
            Lorem Ipsum - это текст-рыба, часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной
          </div>
          <div className="max-w-xs text-sm text-gray-200">&copy; All rights reserved by Casa Cangalha, 2025</div>
        </div>
        <div>
          <div>
            <div className="font-bold mb-5 max-w-xs text-gray-200">Pages</div>
            <div className="text-sm text-gray-500 flex flex-col gap-1.5 text-gray-300">
              <div>Newsletter</div>
              <div>Events</div>
              <div>About</div>
              <div>Support</div>
              <div>Shop</div>
              <div>Admin</div>
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold mb-5 max-w-xs text-gray-200">Support</div>
          <div className="text-sm font-gray-300 flex flex-col gap-1.5 text-gray-600 text-gray-300">
            <div>Patreon</div>
            <div>Arob.se</div>
            <div>Buy us a coffee</div>
          </div>
        </div>
        <div>
          <div className="font-bold mb-5 max-w-xs text-gray-200">Contact</div>
          <div className="text-sm font-gray-300 flex flex-col gap-2 text-gray-300">
            <div className="flex gap-2 items-start">
              <MapPin size={20} className="text-gray-200" />
              <div>Cangalha, Auiruoca, MG, Brazil</div>
            </div>
            <div className="flex gap-2 items-center">
              <Phone size={20} className="text-gray-200" />
              <div>+55 11 98765-4321</div>
            </div>
            <div className="flex gap-2 items-center">
              <Mail size={20} className="text-gray-200" />
              <div>Casa.cangalha@gmail.com</div>
            </div>
            <div className="flex gap-2 items-center">
              <Instagram size={20} className="text-gray-200" />
              <div>Casa.cangalha</div>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
// All rights reserved © Casa Cangalha

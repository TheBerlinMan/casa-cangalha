'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  const navItems = {
    en: {
      calendar: "Calendar",
      blog: "Blog",
      about: "About",
      support: "Support"
    },
    pt: {
      calendar: "Calendário",
      blog: "Blog",
      about: "Sobre",
      support: "Apoie"
    }
  };

  const currentLang = navItems[language];

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
      <div className="flex gap-4 -mb-1.5 items-center">
        <Link href="/calendar">{currentLang.calendar}</Link>
        <Link href="/blog">{currentLang.blog}</Link>
        <Link href="/about">{currentLang.about}</Link>
        <Link href="/support">{currentLang.support}</Link>
        <button
          onClick={toggleLanguage}
          className="ml-4 px-3 py-1 rounded border border-white/40 hover:bg-white/10 transition-colors"
        >
          {language === 'en' ? 'EN' : 'PT'}
        </button>
      </div>
    </div>
  );
};

export default Header;

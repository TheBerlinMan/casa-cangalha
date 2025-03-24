"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { usePathname } from "next/navigation";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const navItems = {
  en: {
    calendar: "Events",
    blog: "Newsletter",
    about: "About",
    support: "Support",
    shop: "Shop",
  },
  pt: {
    calendar: "Calendário",
    blog: "Blog",
    about: "Sobre",
    support: "Apoie",
    shop: "Loja",
  },
};

const Header = () => {
  const path = usePathname();
  const adminPath = "/admin";

  return path.startsWith(adminPath) ? <AdminHeader /> : <MainHeader />;
};

export default Header;

export const AdminHeader = () => {
  return (
    <div>
      <div
        className="flex justify-between items-end px-8 py-4 h-20"
        style={{ backgroundColor: "#65844A", color: "#E3E7D3" }}
      >
        <div>
          <div className="flex gap-4 text-2xl items-end">
            <Link href="/" className="flex items-center gap-2">
              Casa Cangalha
            </Link>
          </div>
        </div>
        <div className="flex gap-4 -mb-1.5 items-center">
          <ClerkProvider
          >
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <SignInButton />
              <UserButton />
            </SignedIn>
          </ClerkProvider>
        </div>
      </div>
    </div>
  );
};

export const MainHeader = () => {
  const { language, toggleLanguage } = useLanguage();

  const currentLang = navItems[language];
  return (
    <div>
      <div
        className="flex justify-between items-center px-6 py-2 h-12 shadow-md"
        style={{ borderBottom: "1px solid #65844A", color: "#65844A", backgroundColor: "#f0f0f0"}}
        // style={{ backgroundColor: "#65844A", color: "#E3E7D3" }}
      >
        <div>
          <div className="flex gap-4 text-2xl items-end">
            <Link href="/" className="flex items-center gap-2 font-bold text-">
              Casa Cangalha
            </Link>
          </div>
        </div>
        <div className="flex gap-4 items-center font-bold text-sm">
          <Link href="/blog">{currentLang.blog}</Link>
          <Link href="/calendar">{currentLang.calendar}</Link>
          {/* <Link href="/shop">{currentLang.shop}</Link> */}
          <Link href="/about">{currentLang.about}</Link>
          <Link href="/support">{currentLang.support}</Link>
          <button
            onClick={toggleLanguage}
            // className="ml-4 px-3 py-1 rounded border border-white/40 hover:bg-white/10 transition-colors"
            className="hidden"
          >
            {language === "en" ? "EN" : "PT"}
          </button>
        </div>
      </div>
    </div>
  );
};

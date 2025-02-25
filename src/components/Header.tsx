"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    calendar: "Calendar",
    blog: "Blog",
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
              <Image
                src="/White-Text.png"
                alt="Casa Cangalha"
                width={200}
                height={200}
              />
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
        className="flex justify-between items-end px-8 py-4 h-20"
        style={{ backgroundColor: "#65844A", color: "#E3E7D3" }}
      >
        <div>
          <div className="flex gap-4 text-2xl items-end">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/White-Text.png"
                alt="Casa Cangalha"
                width={200}
                height={200}
              />
            </Link>
          </div>
        </div>
        <div className="flex gap-4 -mb-1.5 items-center">
          <Link href="/blog">{currentLang.blog}</Link>
          <Link href="/calendar">{currentLang.calendar}</Link>
          <Link href="/shop">{currentLang.shop}</Link>
          <Link href="/about">{currentLang.about}</Link>
          <Link href="/support">{currentLang.support}</Link>
          <button
            onClick={toggleLanguage}
            className="ml-4 px-3 py-1 rounded border border-white/40 hover:bg-white/10 transition-colors"
          >
            {language === "en" ? "EN" : "PT"}
          </button>
        </div>
      </div>
    </div>
  );
};

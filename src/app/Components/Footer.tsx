'use client';

import React from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      description: "Casa Cangalha is a place where you can find the best of the best in the world of music.",
      links: {
        mission: "Mission",
        about: "About",
        contact: "Contact",
        support: "Support",
        admin: "Admin"
      },
      address: "1 Cangalha, 1000, Portugal",
      email: "info@casa-cangalha.com",
      phone: "+351 912 345 678",
      social: {
        follow: "Follow us on social media",
        instagram: "Instagram"
      },
      rights: "All rights reserved © Casa Cangalha"
    },
    pt: {
      description: "Casa Cangalha é um lugar onde você pode encontrar o melhor do melhor no mundo da música.",
      links: {
        mission: "Missão",
        about: "Sobre",
        contact: "Contato",
        support: "Apoie",
        admin: "Admin"
      },
      address: "Rua Cangalha, 1000, Portugal",
      email: "info@casa-cangalha.com",
      phone: "+351 912 345 678",
      social: {
        follow: "Siga-nos nas redes sociais",
        instagram: "Instagram"
      },
      rights: "Todos os direitos reservados © Casa Cangalha"
    }
  };

  const currentContent = content[language];

  return (
    <div>
      <hr className="border-t border-gray-300" />
      <div className="flex flex-col gap-2 py-4 px-8">
        <div className="flex justify-between items-start ">
          <div className="flex flex-col gap-4">
            <div>Casa Cangalha</div>
            <p className="text-md max-w-sm">
              {currentContent.description}
            </p>
            <div className="flex gap-4">
              <Link href="/">{currentContent.links.mission}</Link>
              <Link href="/">{currentContent.links.about}</Link>
              <Link href="/">{currentContent.links.contact}</Link>
              <Link href="/">{currentContent.links.support}</Link>
              <Link href="/">{currentContent.links.admin}</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>Casa Cangalha</div>
            <div>{currentContent.address}</div>
            <div>{currentContent.email}</div>
            <div>{currentContent.phone}</div>
            <div>
              {currentContent.social.follow}
              <div>{currentContent.social.instagram}</div>
            </div>
          </div>
        </div>
        <div>
          <p>{currentContent.rights}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
// All rights reserved © Casa Cangalha

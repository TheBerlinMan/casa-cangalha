'use client';

import Image from "next/image";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  const content = {
    en: {
      description1: "Casa Cangalha is a cultural center located in the heart of the rural neighborhood of Cangalha, within the city of Aiuruoca.",
      description2: "Our goal is to provide a space for the local community that promotes educational opportunities, in addition to serving as a platform for selling handcrafted products made by artisans from the region.",
      description3: "We offer vocational courses, workshops, events, and much more!",
      subscribe: "Subscribe"
    },
    pt: {
      description1: "Casa Cangalha é um centro cultural localizado no coração do bairro rural de Cangalha, na cidade de Aiuruoca.",
      description2: "Nosso objetivo é proporcionar um espaço para a comunidade local que promova oportunidades educacionais, além de servir como plataforma para a venda de produtos artesanais feitos por artesãos da região.",
      description3: "Oferecemos cursos profissionalizantes, oficinas, eventos e muito mais!",
      subscribe: "Inscreva-se"
    }
  };

  const currentContent = content[language];

  return (
    <div>
      {/* <h1 className="text-4xl font-bold text-center -mb-8 mt-8">Welcome to our website!</h1> */}
      <div className="flex gap-4 -mt-8 justify-center items-center">
        <Image
          src="/Assets-07.png"
          alt="Casa Cangalha"
          width={500}
          height={500}
        />
        <div className="px-4 flex flex-col gap-8 justify-center items-center">
          <div className="space-y-4">
            <p>{currentContent.description1}</p>
            <p>{currentContent.description2}</p>
            <p>{currentContent.description3}</p>
          </div>
          <button
            style={{ backgroundColor: "#65844A" }}
            className="text-white px-4 py-2 rounded-md w-1/2"
          >
            {currentContent.subscribe}
          </button>
        </div>
      </div>
    </div>
  );
}

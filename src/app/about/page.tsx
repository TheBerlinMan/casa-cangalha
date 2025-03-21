import React from "react";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        About Casa Cangalha
      </h1>

      <div id="mission" className="flex flex-col md:flex-row items-stretch mb-6">
        {/* Left cell: Text container determines the height */}
        <div id="coreValues" className="md:w-1/2 p-4">
          <div className="mb-3">
            <h2 className="text-xl font-bold mb-1">Our Mission &amp; Values</h2>
            <p className="text-gray-500">
              Our community center is dedicated to enriching lives and building
              a stronger community through inclusive programs, services, and
              spaces that foster connection, learning, and well-being for people
              of all ages and backgrounds.
            </p>
          </div>
          <div className="flex gap-2 items-start mb-2">
            <BadgeCheck className="w-6 h-6 shrink-0" strokeWidth={1} />
            <p>
              <span className="font-bold">Inclusion:</span> We celebrate
              diversity and create opportunities for everyone to participate and
              thrive.
            </p>
          </div>
          <div className="flex gap-2 items-start mb-2">
            <BadgeCheck className="w-6 h-6 shrink-0" strokeWidth={1} />
            <p>
              <span className="font-bold">Empowerment:</span> We inspire and
              equip individuals to take ownership of their lives and make a
              positive impact on their community.
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <BadgeCheck className="w-6 h-6 shrink-0" strokeWidth={1} />
            <p>
              <span className="font-bold">Sustainability:</span> We are
              committed to preserving our environment and promoting practices
              that ensure long-term viability for future generations.
            </p>
          </div>
        </div>

        {/* Right cell: The image container automatically stretched to the text height */}
        <div className="relative md:w-1/2">
          <Image
            src="/images/rainbow.jpg"
            alt="Casa Cangalha"
            fill
            className="object-cover p-4"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-1">Our History & Founder</h2>
        <div className="flex flex-row gap-4">
          <div>
            <Image
              src="/images/Jaq.jpeg"
              alt="Casa Cangalha"
              width={500}
              height={500}
              className="object-cover rounded-md"
            />
          </div>
          <p className="w-3/4">
            Casa Cangalha was founded in 2020 by a group of volunteers who
            wanted to create a space for the community to come together and
            learn about the history of the area.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

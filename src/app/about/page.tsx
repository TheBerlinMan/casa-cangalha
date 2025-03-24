import React from "react";
import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4 flex flex-col gap-6 max-w-5xl" >
      <div>
        <h1 
          className="text-2xl font-bold text-center"
          style={{ color: "#65844A" }}
        >
          About Casa Cangalha
        </h1>
        <p className="text-gray-500 text-center">
          Learn about our mission, history, team, and how we serve the
          community.
        </p>
      </div>

      <Card className="p-10" style={{ border: "1px solid #65844A" }}>
        <CardContent className="p-0">
          <div
            id="mission"
            className="flex flex-col md:flex-row items-stretch gap-4"
            
          >
            {/* Left cell: Text container determines the height */}
            <div id="coreValues" className="md:w-1/2">
              <div className="mb-3">
                <h2 className="text-xl font-bold mb-1" style={{ color: "#65844A" }}>
                  Our Mission &amp; Values
                </h2>
                <p className="text-gray-500">
                  Our community center is dedicated to enriching lives and
                  building a stronger community through inclusive programs,
                  services, and spaces that foster connection, learning, and
                  well-being for people of all ages and backgrounds.
                </p>
              </div>
              <div className="flex gap-2 items-start mb-2">
                <CircleCheck
                  className="w-6 h-6 shrink-0"
                  style={{ color: "#65844A" }}
                  strokeWidth={1}
                />
                <p className="text-gray-500">
                  <span className="font-bold" style={{ color: "#65844A" }}>Inclusion:</span> We
                  celebrate diversity and create opportunities for everyone to
                  participate and thrive.
                </p>
              </div>
              <div className="flex gap-2 items-start mb-2">
                <CircleCheck
                  className="w-6 h-6 shrink-0"
                  style={{ color: "#65844A" }}
                  strokeWidth={1}
                />
                <p className="text-gray-500">
                  <span className="font-bold" style={{ color: "#65844A" }}>Empowerment:</span> We
                  inspire and equip individuals to take ownership of their lives
                  and make a positive impact on their community.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <CircleCheck
                  className="w-6 h-6 shrink-0"  
                  style={{ color: "#65844A" }}
                  strokeWidth={1}
                />
                <p className="text-gray-500">
                  <span className="font-bold" style={{ color: "#65844A" }}>Sustainability:</span>{" "}
                  We are committed to preserving our environment and promoting
                  practices that ensure long-term viability for future
                  generations.
                </p>
              </div>
            </div>

            {/* Right cell: The image container automatically stretched to the text height */}
            <div className="relative md:w-1/2" >
              <Image
                src="/images/rainbow.jpg"
                alt="Casa Cangalha"
                fill
                className="object-cover rounded-md shadow-md"
                style={{ border: "2px solid #65844A" }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

    

      <Card className="p-10" style={{ border: "1px solid #65844A" }}>
        <CardContent className="p-0">
          <div>
            <div className="flex flex-row gap-4">
              <div>
                <Image
                  src="/images/Jaq.jpeg"
                  alt="Casa Cangalha"
                  width={500}
                  height={500}
                  className="object-cover rounded-md shadow-md"
                  style={{ border: "2px solid #65844A" }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold mb-1 text-white" style={{ color: "#65844A" }}>
                  Our History & Founder
                </h2>
                <p className="w-3/4 text-gray-500">
                  Casa Cangalha was founded in 2020 by a group of volunteers who
                  wanted to create a space for the community to come together
                  and learn about the history of the area.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="">
        <div className="mb-4 text-center">
          {/* <h2 className="text-xl font-bold" style={{ color: "#65844A" }}>Get Involved</h2> */}
          <p className="text-gray-500 text-md">
            If you connect with our mission, there are many ways to support us.
          </p>
        </div>
        <div className="flex gap-4 w-full">
          <div className="flex gap-6">
            <div className="flex flex-col justify-center items-center p-4 rounded-lg bg-white" style={{ border: "1px solid #65844A" }}>
              <h3 className="text-lg font-bold mb-1" style={{ color: "#65844A" }}>Volunteer</h3>
              <p className="text-center text-gray-500 text-sm">
                If you are interested in volunteering, please contact us.
              </p>
              <button className="py-2 px-4 border rounded-md mt-4 text-sm font-bold" style={{ backgroundColor: "#65844A", color: "white" }}>
                Learn More
              </button>
            </div>
            <div className="flex flex-col justify-center items-center p-4 rounded-lg bg-white" style={{ border: "1px solid #65844A" }}>
              <h3 className="text-lg font-bold mb-1" style={{ color: "#65844A" }}>Donate</h3>
              <p className="text-center text-gray-500 text-sm">
                Contribute financially to help sustain our programs and
                services.{" "}
              </p>
              <button className="py-2 px-4 border rounded-md mt-4 text-sm font-bold" style={{ backgroundColor: "#65844A", color: "white" }}>
                Donate
              </button>
            </div>
            <div className="flex flex-col justify-center items-center p-4 rounded-lg bg-white" style={{ border: "1px solid #65844A" }}>
              <h3 className="text-lg font-bold mb-1" style={{ color: "#65844A" }}>Partner</h3>
              <p className="text-center text-gray-500 text-sm">
                Collaborate with us on initiatives that benefit the community.
              </p>
              <button className="py-2 px-4 border rounded-md mt-4 text-sm font-bold" style={{ backgroundColor: "#65844A", color: "white" }}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default About;

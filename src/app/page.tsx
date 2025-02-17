import Image from "next/image";

export default function Home() {
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

        <p>
          Casa Cangalha is a cultural center located in the heart of the rural
          neighborhood of Cangalha, within the city of Aiuruoca.
        </p>
        <p>
          Our goal is to provide a space for the local community that promotes
          educational opportunities, in addition to serving as a platform for
          selling handcrafted products made by artisans from the region.
        </p>
        <p>We offer vocational courses, workshops, events, and much more!</p>
        </div>
        <button
          style={{ backgroundColor: "#65844A" }}
          className="text-white px-4 py-2 rounded-md w-1/2"
          >
          Subscribe
        </button>
        </div>
      </div>
    </div>
  );
}

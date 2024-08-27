import Image from "next/image";
import gallery1 from "@/assets/footerImage/gallery1.jpg";
import about from "@/assets/aboutmain.jpg";

export default function About() {
  return (
    <>
      <div className="mx-8 my-8 bg-slate-100 p-5 rounded-lg flex flex-row">
        <div className="w-1/2">
          <Image src={about} alt="mainabout" className="rounded-lg " />
        </div>
        <div className="w-1/2 flex  flex-col justify-center">
          <h2 className="text-center font-semibold text-teal-700 my-2">
            WHO ARE WE?
          </h2>
          <p className="font-light">
            Fish School Nepal is a specialized fish store in Kirtipur,
            Kathmandu, offering a wide selection of freshwater fish for aquarium
            enthusiasts. The store caters to both aggressive and peaceful
            species, offering a variety of fish and aquarium accessories. Fish
            School Nepal also provides custom tank design services, ensuring
            unique tank setups fit the customers space and enhance the overall
            look of their home or office. The store also offers professional
            aquascaping services, ensuring a visually captivating and
            sustainable aquatic environment. Fish School Nepal is a community
            hub for aquatic enthusiasts, offering advice and tips to help
            customers achieve their aquarium goals. The store is a favorite
            among local fish enthusiasts, making it a trusted destination for
            quality fish, custom aquariums, and expert aquascaping..
          </p>
        </div>
      </div>
      <div className="mx-8 my-8 bg-slate-100 p-5 rounded-lg flex flex-col">
        <div>
          <h1 className="text-center font-semibold text-teal-700 mx-auto">
            Our Achievements
          </h1>
        </div>
        <div className="flex flex-row font-normal mt-3 ">
          <Image
            className=" w-52 mx-5 cursor-pointer rounded-lg"
            src={gallery1}
            alt="gallery1"
          />
          <p className="mx-5 font-light px-28  ">
            Fish School Nepal, a leading ornamental fish retailer in Nepal, has
            secured second place in the Betta competition, specifically in the
            Plakat variety category. The Plakat Betta, known for its robust
            build and vibrant colors, is a popular choice among Betta
            enthusiasts. The stores second position in this category reflects
            its commitment to high standards of care, breeding, and selection.
            The fish presented by Fish School Nepal displayed exceptional
            physical traits and demonstrated the stores dedication to
            maintaining the health and vitality of their stock. This recognition
            solidifies Fish School Nepals position as a trusted source for
            top-quality ornamental fish in Kathmandu and beyond, enhancing its
            credibility and customer trust.{" "}
          </p>
        </div>
      </div>
    </>
  );
}

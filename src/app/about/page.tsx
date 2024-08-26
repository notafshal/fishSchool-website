import Image from "next/image";
import gallery1 from "@/assets/footerImage/gallery1.jpg";
export default function About() {
  return (
    <>
      {" "}
      <div className="flex flex-col font-normal mt-3 ">
        <p className="text-center mx-auto">Awards</p>
        <Image
          className="w-24 hover:w-32 cursor-pointer transition-all"
          src={gallery1}
          alt="gallery1"
        />
      </div>
    </>
  );
}

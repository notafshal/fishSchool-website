"use client";
import Image from "next/image";

interface Props {
  image: any;
  name: string;
  desc: string;
}
const showDesc = () => {
  console.log("desc");
};
export default function Card(props: Props) {
  return (
    <>
      <div
        onClick={showDesc}
        className="md:bg-white my-4 w-72 flex flex-col p-2 rounded-lg hover:bg-teal-700 hover:text-white hover:cursor-pointer md:mx-3 md:text-center"
      >
        <Image
          src={props.image}
          alt="cardphoto"
          className="h-10 w-10 mx-auto rounded-full object-cover"
        />
        <p className="mx-auto  font-light text-sm md:font-semibold md:text-lg">
          {props.name}
        </p>
        <p className="mx-auto hidden md:block text-center text-sm mt-2 ">
          {props.desc}
        </p>
      </div>
    </>
  );
}

import Image from "next/image";
import logo from "@/assets/logo.jpg";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="bg-teal-700 w-dvw h-16 p-2 flex flex-row justify-between">
        <div className="flex flex-row">
          <Image
            className="h-10 w-10 rounded-full"
            src={logo}
            alt="Fishschool logo"
          />
          <h3 className="text-white mx-4 my-2">Fish School Nepal</h3>
        </div>
        <ul className="flex flex-row w-72 p-2 justify-between text-white">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </div>
    </>
  );
}

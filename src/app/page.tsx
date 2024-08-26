import Image from "next/image";
import mainpic from "@/assets/mainpic.jpg";
import logo from "@/assets/logo.jpg";
export default function Home() {
  return (
    <>
      <div className="mx-8 my-8 bg-slate-100 p-5 rounded-lg flex flex-row">
        <div className="flex flex-row">
          <Image className="rounded-full w-72 h-72" src={logo} alt="logo" />
        </div>
        <div>
          <h2 className="text-teal-700 text-7xl mx-72 font-bold">
            Bring <br />
            Nature Home
          </h2>
          <button className="mx-72 my-12 bg-teal-700 text-white p-2 rounded-lg">
            Contact us
          </button>
        </div>
      </div>
    </>
  );
}

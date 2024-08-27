import Image from "next/image";

import logo from "@/assets/logo.jpg";
import tank from "@/assets/cardImage/tank.png";
import Card from "@/components/Card";
import nano from "@/assets/cardImage/nano.jpg";
import accessories from "@/assets/cardImage/accessories.jpg";
import monster from "@/assets/cardImage/monster.png";
import plant from "@/assets/cardImage/plant.png";
import gold from "@/assets/cardImage/gold.png";
import Link from "next/link";
import Map from "@/components/Map";

export default function Home() {
  return (
    <>
      <div className="mx-8 my-8 bg-slate-100 p-5 rounded-lg flex flex-row ">
        <div className="flex flex-row ">
          <Image
            className="rounded-full w-72 h-72 sm:hidden lg:block "
            src={logo}
            alt="logo"
          />
        </div>
        <div className="md:mx-1 ">
          <h2 className=" text-teal-700 text-7xl  lg:mx-72 md:text-left font-bold">
            Bring <br />
            Nature Home
          </h2>
          <p className="text-teal-700 mt-2 sm:text-center lg:mx-72">
            Different types of plants,fishes and accessories available
          </p>
          <Link href="/contact">
            <button className="lg:mx-72 my-12 object-contain bg-teal-700 text-white p-3 rounded-lg">
              Contact us
            </button>
          </Link>
        </div>
      </div>
      <div className="mx-8 my-8 bg-slate-100 p-5 rounded-lg flex flex-col">
        <div className="text-2xl text-teal-700 font-semibold mx-auto md:text-center">
          <p className="md:text-center"> What can you find in Our Store?</p>
        </div>
        <div className="flex flex-row justify-around">
          <Card
            name={"Aggressive Monster Fish"}
            image={monster}
            desc={
              "We deal with different species of Aggressive and monster fishes"
            }
          />

          <Card
            name={"Nano Fish"}
            image={nano}
            desc={
              "We deal with different species of nano fishes for your planted aquariums"
            }
          />
          <Card
            name={"Plants"}
            image={plant}
            desc={
              "We deal with different species of high-tech and low-tech aquarium plants"
            }
          />
        </div>
        <div className="flex flex-row justify-around">
          <Card
            name={"Goldfish"}
            image={gold}
            desc={"We deal with various types of normal and fancy goldfishes"}
          />
          <Card
            name={"Accessories"}
            image={accessories}
            desc={
              "We deal with different accessories required for your aquariums"
            }
          />
          <Card
            name={"Aquariums"}
            image={tank}
            desc={"We deal with custom tanks and readymade aquariums"}
          />
        </div>
      </div>
      <Map />
    </>
  );
}

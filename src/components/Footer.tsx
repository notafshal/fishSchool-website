import Link from "next/link";
import logo from "@/assets/logo.jpg";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className="bg-teal-700 w-dvw h-fit flex flex-row justify-around px-10 ">
        <div className="flex flex-col ">
          <Image
            src={logo}
            alt="logo"
            className="h-12 w-12 mx-20 mt-5 py-1 rounded-full"
          />
          <p className="text-white font-normal my-1 text-center">
            Get in touch
          </p>
          <div className="flex flex-row justify-center">
            <Link
              href="https://www.facebook.com/Namastenepalgaming/photos"
              target="blank"
            >
              <svg
                className="h-5 w-5  fill-white mx-3 hover:cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>facebook</title>
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/fishschoolnepal/"
              target="blank"
            >
              <svg
                className="h-5 w-5 fill-white mx-auto hover:cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>instagram</title>
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-white font-normal mt-3    ">
          <p className="text-white font-normal my-3 text-center">About us</p>
          <div className="flex flex-row">
            <svg
              className="h-5 fill-white mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>map-marker</title>
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
            </svg>
            <p>Kirtipur, Kathmandu</p>
          </div>
          <div className="flex flex-row">
            <svg
              className="h-5 fill-white mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>phone</title>
              <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg>
            <p>984-0054526</p>
          </div>
          <div className="flex flex-row">
            <svg
              className="h-5 fill-white mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>email</title>
              <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
            </svg>
            <p>fishschoolnepal@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 w-dvw h-11 md:h-8">
        <p className="text-center">
          Copyright @notafshal. All right reserved to Afshal Maharjan
        </p>
      </div>
    </>
  );
}

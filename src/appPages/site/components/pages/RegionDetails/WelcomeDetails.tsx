"use client";
import Image from "next/image";
import scss from "./WelcomeDetails.module.scss";
import image from "../RegionSection/assets/image/issykMain.png";
import Link from "next/link";
import { BiMap } from "react-icons/bi";
import { MdOutlineHotel } from "react-icons/md";
import { MdOutlineKitchen } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";
import { GrAttraction } from "react-icons/gr";
import { usePathname } from "next/navigation";

const WelcomeDetails = () => {
  const pathname = usePathname();
  const LinkDetails = [
    {
      name: "Places",
      href: "/details/places",
      icon: <BiMap />,
    },
    {
      name: "Hotels",
      href: "/details/hotels",
      icon: <MdOutlineHotel />,
    },
    {
      name: "Kitchen",
      href: "/details/kitchens",
      icon: <MdOutlineKitchen />,
    },
    {
      name: "Event",
      href: "/details/events",
      icon: <MdOutlineEventNote />,
    },
    {
      name: "Attraction",
      href: "/details/attractions",
      icon: <GrAttraction />,
    },
  ];
  const WelcomeData = [
    {
      img: "https://s3-alpha-sig.figma.com/img/3c4e/2195/2b923033db0bac15d56a59ffc0cf519c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mDHWhDAfmH7pLowUDEaZqJtMeM7f5RVo8BLVYXkGeXKiPEeG9crufGo8WG4g~ox-7T3GwWcYKgqku0A2VnUscvvM~kAlfml-t5Apnv4zqkTDv38C~lZ3UFSoqJEOEvpXQ-Bp3XMwU5uqKIi8GdoqbIuwV~a0oljGrSkO8VDj2MuioehW7c3Q9Pm5Tnl2NFy5Ydy8yuOtxWAyF5sUZMNhHA1W5ce2ygJPTw1I-Aya~63DTpr--iVsHVPbgHjc~vIoJhs8qL4qeDK6F8wVeCRK9cpPG6WJZrFCZRvDpAk079ugkPuMjRygjRHPHv1lSEjFMpYpC4qcEojqQUPsLzcVVA__",
      title: "Cholpon-Ata",
      des: "Cholpon-Ata is the most famous resort town on the shore of Lake Issyk-Kul. Once upon a time, caravans of the Great Silk Road passed through Cholpon-Ata. Today, tens of thousands of tourists from all over the CIS come to Cholpon-Ata. The city is famous for its clean sandy beaches and transparent lake. The best time  to visit Cholpon-Ata is from mid–June to September.",
    },
  ];
  return (
    <section className={scss.main}>
      <img
        src="https://s3-alpha-sig.figma.com/img/3c4e/2195/2b923033db0bac15d56a59ffc0cf519c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mDHWhDAfmH7pLowUDEaZqJtMeM7f5RVo8BLVYXkGeXKiPEeG9crufGo8WG4g~ox-7T3GwWcYKgqku0A2VnUscvvM~kAlfml-t5Apnv4zqkTDv38C~lZ3UFSoqJEOEvpXQ-Bp3XMwU5uqKIi8GdoqbIuwV~a0oljGrSkO8VDj2MuioehW7c3Q9Pm5Tnl2NFy5Ydy8yuOtxWAyF5sUZMNhHA1W5ce2ygJPTw1I-Aya~63DTpr--iVsHVPbgHjc~vIoJhs8qL4qeDK6F8wVeCRK9cpPG6WJZrFCZRvDpAk079ugkPuMjRygjRHPHv1lSEjFMpYpC4qcEojqQUPsLzcVVA__"
        alt=""
        className={scss.adapImg}
      />
      <div className="container">
        <div className={scss.content}>
          {WelcomeData.map((el, idx) => (
            <div className={scss.welcome} key={idx}>
              <img src={el.img} alt="" />
              <div className={scss.text}>
                <h1>{el.title}</h1>
                <p>{el.des}</p>
              </div>
            </div>
          ))}
          <div className={scss.actions}>
            {LinkDetails.map((el) => (
              <Link
                href={el.href}
                className={
                  pathname === el.href
                    ? `${scss.action} ${scss.active}`
                    : `${scss.action}`
                }
              >
                {el.icon} {el.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeDetails;

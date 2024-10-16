import React from "react";
import PartHeader from "../part/PartHeader";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const WidgetFollow = () => {
  const socialMedia = [
    {
      icon: <Facebook fill={"#fff"} strokeWidth={0} />,
      url: "https://facebook.com",
      color: "bg-[#1877f2]",
    },
    {
      icon: <Youtube fill={"transparent"} strokeWidth={2} stroke={"#fff"} />,
      url: "https://youtube.com",
      color: "bg-[#ff0000]",
    },
    {
      icon: <Instagram fill={"transparent"} strokeWidth={2} stroke={"#fff"} />,
      url: "https://instagram.com",
      color: "bg-[#262626]",
    },
    {
      icon: <Twitter fill={"#fff"} strokeWidth={0} />,
      url: "https://twitter.com",
      color: "bg-[#1da1f2]",
    },
    {
      icon: <Linkedin fill={"#fff"} strokeWidth={0} />,
      url: "https://linkedin.com",
      color: "bg-[#0a66c2]",
    },
  ];

  return (
    <div className='widget border border-gray-200 p-7 mb-10'>
      <PartHeader title='Follow Us' />
      <ul className='flex justify-center gap-5 flex-wrap'>
        {socialMedia.map((item, key) => {
          return (
            <li key={key}>
              <a
                href={`${item.url}`}
                className={`icon size-12 rounded-full ${item.color} grid place-content-center`}
              >
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WidgetFollow;

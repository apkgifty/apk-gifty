import Link from "next/link";
import React from "react";
import LanguageSelect from "../UI/LanguageSelect";
import MenuButton from "../UI/MenuButton";
import NavigationItem from "./NavigationItem";

const mainNavigationLinks = [
  { title: "Home", link: "#" },
  { title: "About", link: "/about" },
  { title: "Buy GiftCards", link: "#" },
  { title: "Contact", link: "#" },
  { title: "Promotion", link: "#" },
  { title: "Blog", link: "#" },
];

const Navigation = () => {
  return (
    <div className="w-full flex justify-between items-center ">
      <div className="flex gap-12">
        <img src="/images/apklogo.png" />
        <div className="hidden lg:flex space-x-6">
          {mainNavigationLinks.map((navItem) => (
            <NavigationItem
              key={navItem.title}
              title={navItem.title}
              link={navItem.link}
            />
          ))}
        </div>
      </div>
      <div className="hidden lg:block">
        <LanguageSelect />
      </div>
      <div className="lg:hidden">
        <MenuButton />
      </div>
    </div>
  );
};

export default Navigation;

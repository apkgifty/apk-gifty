"use client";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { dashboardPageNavHandler } from "@/redux/features/mobileNavSlice";

import Iconcard from "@/components/Card/Iconcard";
import LanguageSelect from "@/components/UI/LanguageSelect";
import NotificationSvg from "@/components/UI/SvgIcons/NotificationSvg";
import SettingsSvg from "@/components/UI/SvgIcons/SettingsSvg";
import WalletSvg from "@/components/UI/SvgIcons/WalletSvg";
import MenuButton from "@/components/UI/MenuButton";

const Topbar = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full px-6 py-4 fixed right-0 left-0 top-0 z-10 flex justify-between items-center bg-secondary border-b border-tertiary text-white">
      <div>
        <Link href="/">
          <Image
            src={"/images/apklogo-new.png"}
            width={100}
            height={100}
            alt="apk logo"
          />
        </Link>
      </div>
      <div className="flex gap-x-2">
        <div className="hidden lg:block">
          <LanguageSelect />
        </div>
        {/* <Iconcard icon={<WalletSvg />} animate /> */}
        <Iconcard icon={<SettingsSvg />} animate />
        <Iconcard icon={<NotificationSvg />} badgeData="8" animate />
        <div className="lg:hidden">
          <MenuButton
            handleClick={() => dispatch(dashboardPageNavHandler(true))}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

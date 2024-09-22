"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.png";
import Link from "next/link";
import NavBar from "./NavBar";
import BottomLinks from "./BottomLinks";
import SocialLink from "./SocialLink";
const Sidebar = () => {
  return (
    <aside className="w-[320px] h-screen mb-36 bg-white p-6">
      <Link href="">
        <Image src={logo} alt="QuickShop logo" />
      </Link>

      <NavBar />

      <div className="space-y-4">
        <button className="bg-yellow-500 text-white py-2 px-4 w-full rounded">
          %Discount%
        </button>
        <button className="bg-black text-white py-2 px-4 w-full rounded">
          New this week
        </button>
      </div>
      <BottomLinks />
      <SocialLink />
    </aside>
  );
};

export default Sidebar;

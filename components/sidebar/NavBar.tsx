import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavBarItem {
  name: string;
  path: string;
}

export default function NavBar() {
  const pathname = usePathname();
  const menuItems: NavBarItem[] = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "CART", path: "/cart" },
    { name: "CHECKOUT", path: "/checkout" },
  ];

  return (
    <div className="w-[170px] py-[60px] px-[60px]">
      <ul className="space-y-4">
        {menuItems.map((item: NavBarItem) => (
          <li key={item.name} className="relative group">
            <Link
              href={item.path}
              className={
                "block py-2 pr-4 text-[16px] text-gray-700 transition-colors duration-200 ease-in-out hover:text-yellow-500"
              }
            >
              {item.name}
              <span
                className={`absolute -left-20 ${
                  pathname === item.path ? "w-9" : "w-0"
                } top-1/2 h-0.5 bg-orange-500 transition-all duration-200 ease-in-out group-hover:w-9`}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

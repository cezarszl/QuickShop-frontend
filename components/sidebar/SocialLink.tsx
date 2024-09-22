import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { IconType } from "react-icons";

interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
}

const socialLinks: SocialLink[] = [
  { name: "Facebook", href: "#", icon: FaInstagram },
  { name: "Instagram", href: "#", icon: FaFacebookF },
  { name: "Twitter", href: "#", icon: FaTwitter },
];

export default function SocialLink() {
  return (
    <div className="py-8 mt-8">
      <ul className="flex justify-around space-x-4">
        {socialLinks.map((social) => (
          <li key={social.name}>
            <Link
              href={social.href}
              className="text-gray-500 hover:text-yellow-500"
            >
              {React.createElement(social.icon, { size: 20 })}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

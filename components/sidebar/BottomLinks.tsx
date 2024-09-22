import React from "react";

interface BottomLink {
  icon: string;
  name: string;
  href: string;
}

const bottomLinks: BottomLink[] = [
  { icon: "🛒", name: "CART (0)", href: "#" },
  { icon: "⭐", name: "FAVOURITE", href: "#" },
  { icon: "🔍", name: "SEARCH", href: "#" },
];

export default function BottomLinks() {
  return (
    <div className="py-10 mt-8">
      <ul className="space-y-4">
        {bottomLinks.map((link) => (
          <li key={link.name} className="flex items-center space-x-2">
            <span className="text-gray-500">{link.icon}</span>
            <a href={link.href} className="text-gray-700 hover:text-yellow-500">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

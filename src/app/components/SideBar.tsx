"use client";

import { useState } from "react";
import {
  User,
  Settings,
  Rocket,
  PenTool,
  Send,
  Copyright,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/about", label: "about", icon: User },
  { href: "/experience", label: "experience", icon: Settings },
  { href: "/projects", label: "projects", icon: Rocket },
  { href: "/blog", label: "blog", icon: PenTool },
];

const contactLink = { href: "/contact", label: "contact", icon: Send };

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const ContactIcon = contactLink.icon;

  return (
    <>
      {/* Mobile / tablet top nav */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-warm dark:bg-charcoal-900 shadow-sm z-20">
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="pl-2 pb-4 flex items-center rounded-lg transition-all duration-200 hover:scale-105"
          >
            {/* Swap icons purely via Tailwind dark variant to avoid flicker and JS state */}
            <Image
              src="/images/light_icon.png"
              width={80}
              height={80}
              alt="hongjie icon"
              className="rounded-lg block dark:hidden"
            />
            <Image
              src="/images/dark_icon.png"
              width={80}
              height={80}
              alt="hongjie icon"
              className="rounded-lg hidden dark:block"
            />
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="relative p-2 rounded-md hover:bg-warm-200 dark:hover:bg-charcoal-700 transition-colors mt-1"
          >
            <span
              className={`flex items-center justify-center transition-all duration-200 ${
                isOpen ? "opacity-0 scale-75 -translate-y-1" : "opacity-100 scale-100 translate-y-0"
              }`}
            >
              <Menu size={24} />
            </span>
            <span
              className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
                isOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-45"
              }`}
            >
              <X size={24} />
            </span>
          </button>
        </div>
        <div
          className="border-t border-charcoal-100 dark:border-charcoal-700 bg-warm dark:bg-charcoal-900 shadow-md overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          style={{
            maxHeight: isOpen ? "500px" : "0px",
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0)" : "translateY(-8px)",
            pointerEvents: isOpen ? "auto" : "none",
          }}
        >
          <nav className="pt-8 pb-8 flex flex-col gap-5 px-1">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-center gap-3 px-3 py-3 text-base font-medium text-charcoal dark:text-offwhite transition-colors hover:bg-warm-200 dark:hover:bg-charcoal-700 font-sans text-center"
              >
                <Icon size={18} className="transition-colors group-hover:text-accent-600" /> {label}
              </Link>
            ))}
            <Link
              href={contactLink.href}
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-center gap-3 px-3 py-3 text-base font-medium text-charcoal dark:text-offwhite transition-colors hover:bg-warm-200 dark:hover:bg-charcoal-700 font-sans text-center"
            >
              <ContactIcon size={18} className="transition-colors group-hover:text-accent-600" /> {contactLink.label}
            </Link>
          </nav>
          <div className="px-6 py-3 pb-8">
            <p className="text-xs text-charcoal-600 dark:text-offwhite/80 flex items-center justify-center gap-1 font-sans font-medium text-center">
              <Copyright size={10} /> 2026 with ❤️ by Gabriel
            </p>
          </div>
        </div>
      </header>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex pl-8 pt-16 pb-10 flex-col fixed h-full bg-warm dark:bg-charcoal-900 w-60 items-start shadow-sm">
        <Link
          href="/"
          className="flex pl-4 pb-4 items-center mb-2 rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer"
        >
          {/* Desktop icon swap via Tailwind dark variant */}
          <Image
            src="/images/light_icon.png"
            width={100}
            height={100}
            alt="hongjie icon"
            className="rounded-xl block dark:hidden"
          />
          <Image
            src="/images/dark_icon.png"
            width={100}
            height={100}
            alt="hongjie icon"
            className="rounded-xl hidden dark:block"
          />
        </Link>
        <nav className="flex flex-col gap-4 mt-2 w-10/12">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-2 px-4 py-1 rounded-lg transition-all duration-200 hover:bg-warm-200 dark:hover:bg-charcoal-700 hover:scale-105 font-sans text-lg font-medium text-black dark:text-offwhite"
            >
              <Icon className="transition-colors group-hover:text-accent-600" /> {label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col justify-end h-screen w-full">
          <Link
            href={contactLink.href}
            className="group flex items-center gap-2 px-4 py-1 rounded-lg transition-all duration-200 hover:bg-warm-200 dark:hover:bg-charcoal-700 hover:scale-105 font-sans text-lg font-medium text-black dark:text-offwhite mb-6 w-10/12"
          >
            <ContactIcon className="transition-colors group-hover:text-accent-600" /> {contactLink.label}
          </Link>
        </div>
        <div className="mt-auto pt-8 w-fit border-t border-charcoal-100 dark:border-charcoal-700">
          <p className="text-xs text-charcoal-600 dark:text-offwhite/80 font-sans font-medium flex items-center gap-1 px-4">
            <Copyright size={10} /> 2026 with ❤️ by Gabriel
          </p>
        </div>
      </aside>
    </>
  );
}

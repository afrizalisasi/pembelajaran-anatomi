// "use client"

import Logo from "@/components/Logo";
import * as React from "react"
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import Link from "next/link";
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation";
// import React, { useEffect } from "react";
import { IoSearch } from "react-icons/io5/index.js";
//import { signIn } from "next-auth/react";
import Navbar from "./Navbar";
import { Button, buttonVariants } from "@/components/ui/button";


//  child navigation link interface
export interface IChildNavigationLink {
  name: string;
  url: string;
}

// navigation link interface
export interface INavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: IChildNavigationLink[];
}

const Header = () => {
  // distructuring the main menu from menu object
  const { main }: { main: INavigationLink[] } = menu;
  const { navigation_button, settings } = config;
  // get current path
  // const pathname = usePathname();

  // scroll to top on route change


  return (
    <header
      className={`header z-30 ${settings.sticky_header && "sticky top-0"}`}
    >
      <nav className="navbar container">
        {/* logo */}
        <div className="order-0">
          <Logo />
        </div>
        {/* navbar toggler */}
        <input id="nav-toggle" type="checkbox" className="hidden" />
        <label
          htmlFor="nav-toggle"
          className="order-3 cursor-pointer flex items-center lg:hidden text-dark dark:text-white lg:order-1"
        >
          <svg
            id="show-button"
            className="h-6 fill-current block"
            viewBox="0 0 20 20"
          >
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>
          <svg
            id="hide-button"
            className="h-6 fill-current hidden"
            viewBox="0 0 20 20"
          >
            <title>Menu Close</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            ></polygon>
          </svg>
        </label>
        {/* /navbar toggler */}

        <ul
          id="nav-menu"
          className="navbar-nav order-3 hidden w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8"
        >
          <Link href="/">
            Home
          </Link>
          <Link href="/topic">
            Topics
          </Link>
          <Link href="/quiz-dashboard">
            Quiz
          </Link>
        </ul>
        <Navbar></Navbar>
      </nav>
    </header>
  );
};

export default Header;

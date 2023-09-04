import ThemeSwitcher from "@/components/ThemeSwitcher";
import config from "@/config/config.json";
import Link from "next/link";
import { IoSearch } from "react-icons/io5/index.js";
import { getAuthSession } from "@/lib/nextauth";
import SignInButton from "./SignInButton";
//import { signIn } from "next-auth/react";
import UserAccountNav from "./UserAccountNav";

const Navbar = async () => {
  // distructuring the main menu from menu object
  const { navigation_button, settings } = config;
  const session = await getAuthSession();

  return (
    <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
          {settings.search && (
            <Link
              className="mr-5 inline-block border-r border-border pr-5 text-xl text-dark hover:text-primary dark:border-darkmode-border dark:text-white"
              href="/search"
              aria-label="search"
            >
              <IoSearch />
            </Link>
          )}
          <ThemeSwitcher className="mr-5" />
          {session?.user ? (
            <UserAccountNav user={session.user}/>
          ) : (
            <SignInButton text={"Get Started"} />
          )}
    </div>
  )
};

export default Navbar;

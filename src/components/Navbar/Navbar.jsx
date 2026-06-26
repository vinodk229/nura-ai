import { useState } from "react";
import { Menu } from "lucide-react";
import navData from "../../data/navData";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header
        className="
        sticky top-0 z-30
        bg-white dark:bg-black
        border-b border-gray-200 dark:border-zinc-800"
      >
        <div className="max-w-8xl mx-auto px-5">
          <div className="h-20 flex items-center justify-between">

            {/* Logo */}
            <div>
              <h1 className="text-3xl font-black text-orange-400 dark:text-white uppercase">
                Nura
              </h1>

              <p className="text-xs tracking-[4px] text-gray-500">
                CREATIVE
              </p>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-10">
                {navData.map((item) => (
                  <NavItem
                    key={item.id}
                    item={item}
                  />
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">

              <ThemeToggle />

             <button
                className="
                relative
                overflow-hidden
                px-8 py-3
                rounded-full              
                bg-orange-500
                text-white
                border
                dark:border-gray-800
                dark:text-white
                font-medium
                group
                "
                >
                <span
                    className="
                    absolute
                    left-0
                    bottom-0
                    w-full
                    h-0
                    bg-black
                    transition-all
                    duration-500
                    ease-in-out
                    group-hover:h-full
                    z-0
                    "
                />

                <span
                    className="
                    relative
                    z-10
                    transition-colors
                    duration-300
                    group-hover:text-white
                    dark:group-hover:text-white
                    "
                >
                    Let's Talk
                </span>
                </button>

              <button
                className="lg:hidden text-black dark:text-white"
                onClick={() =>
                  setIsOpen(true)
                }
              >
                <Menu size={30} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        navData={navData}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  )
}

export default Navbar
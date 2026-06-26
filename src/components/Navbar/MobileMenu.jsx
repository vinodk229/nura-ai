import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
const MobileMenu = ({
  navData,
  isOpen,
  setIsOpen,
}) => {
  const [active, setActive] = useState(null);

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-all
        ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      <div
        className={`fixed top-0 left-0 w-[320px] h-screen
        bg-white dark:bg-zinc-950
        z-50 transition-all duration-500
        ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b dark:border-zinc-800">
          <h2 className="text-xl font-bold text-black dark:text-white uppercase">
            Nura
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="text-black dark:text-white"
          >
            <RxCross2 size={28} />
          </button>
        </div>

        <ul>
          {navData.map((item) => (
            <li
              key={item.id}
              className="border-b dark:border-zinc-800"
            >
              <div
                className="flex justify-between items-center p-4"
                onClick={() =>
                  setActive(
                    active === item.id
                      ? null
                      : item.id
                  )
                }
              >
                <a
                  href={item.link}
                  className="text-black dark:text-white"
                >
                  {item.title}
                </a>

                {item.children && (
                  <LuChevronDown
                    className={`transition ${
                      active === item.id
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                )}
              </div>

              {item.children &&
                active === item.id && (
                  <ul className="bg-gray-50 dark:bg-zinc-900">
                    {item.children.map(
                      (sub) => (
                        <li
                          key={sub.id}
                        >
                          <a
                            href={sub.link}
                            className="block px-8 py-3 text-black dark:text-white"
                          >
                            {sub.title}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
import React from 'react'
import { LuChevronDown } from "react-icons/lu";
const NavItem = ({item}) => {
  return (
    <li className="relative group">
      <a
        href={item.link}
        className="flex items-center gap-1 text-[15px] hover:text-orange-400
        text-black dark:text-white
        font-medium"
      >
        {item.title}

        {item.children && (
          <LuChevronDown size={16} />
        )}
      </a>

      {item.children && (
        <ul
          className="
          absolute top-full left-0
          min-w-[220px]
          bg-white dark:bg-zinc-900
          shadow-xl
          opacity-0 invisible
          group-hover:opacity-100
          group-hover:visible
          transition-all duration-300"
        >
          {item.children.map((sub) => (
            <li key={sub.id}>
              <a
                href={sub.link}
                className="block px-5 py-3 hover:text-orange-400
                text-black dark:text-white
                hover:bg-gray-100 dark:hover:bg-zinc-800"
              >
                {sub.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default NavItem
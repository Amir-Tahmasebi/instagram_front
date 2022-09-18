import React from "react";
import { AiFillHome as HomeIcon } from "react-icons/ai";
import { FiSearch as SearchIcon } from "react-icons/fi";
import { CgAddR as PlusIcon } from "react-icons/cg";
import { TiHeartOutline as HeartIcon } from "react-icons/ti";
import ProfileImg from "./../assets/img/man-3.jpg";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-400 py-3 dark:bg-slate-900">
      <ul className="flex justify-around items-center">
        <li>
          <HomeIcon className="text-2xl dark:text-gray-200" />
        </li>
        <li>
          <SearchIcon className="text-2xl dark:text-gray-200" />
        </li>
        <li>
          <PlusIcon className="text-2xl dark:text-gray-200" />
        </li>
        <li>
          <HeartIcon className="text-3xl dark:text-gray-200" />
        </li>
        <li>
          <img
            src={ProfileImg}
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
        </li>
      </ul>
    </nav>
  );
}

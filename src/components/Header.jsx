import { FiSend } from "react-icons/fi";
import { useSelector } from "react-redux";
import { darkModeSelect } from "../state/slice/darkMode";
import {
  BsFillSunFill as SunIcon,
  BsFillMoonFill as MoonIcon,
} from "react-icons/bs";
import useHeader from "../hooks/useHeader";

export default function Header() {
  const { darkMode } = useSelector(darkModeSelect);
  const [handleToggleDarkMode] = useHeader();

  return (
    <header className="flex justify-between items-center px-4 py-3 fixed bg-white top-0 w-full z-10 dark:bg-slate-900">
      <h1 className="text-2xl dark:text-gray-200 en-sp">instagram</h1>
      <div className="flex">
        <div
          onClick={handleToggleDarkMode}
          className="border rounded p-2 cursor-pointer border-slate-700 dark:border-white drak:bg-slate-700 dark:text-blue-50 duration-700 mr-3"
        >
          {!darkMode && <MoonIcon />}
          {darkMode && <SunIcon />}
        </div>
        <FiSend className="text-2xl rotate-12 dark:text-gray-200 mt-1" />
      </div>
    </header>
  );
}

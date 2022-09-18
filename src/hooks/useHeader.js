import { useSelector, useDispatch } from "react-redux";
import { changeDarkMode, darkModeSelect } from "../state/slice/darkMode";

export default function useHeader() {
  const { darkMode } = useSelector(darkModeSelect);
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    localStorage.setItem("dark-mode", !darkMode ? "dark" : "light");
    dispatch(changeDarkMode(!darkMode));
  };

  return [handleToggleDarkMode];
}

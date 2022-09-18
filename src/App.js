import { Suspense, useEffect } from "react";
import Home from "./pages/Home";
import Loading from "./components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { fetchVideos, videosSelect } from "./state/slice/videos";
import { changeDarkMode, darkModeSelect } from "./state/slice/darkMode";

function App() {
  const videos = useSelector(videosSelect);
  const { darkMode } = useSelector(darkModeSelect);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, []);

  useEffect(() => {
    const darkMode = localStorage.getItem("dark-mode");
    if (darkMode) {
      dispatch(changeDarkMode(darkMode === "dark" ? true : false));
    }
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Suspense fallback={<Loading />}>
        {videos.loading ? <Loading /> : <Home />}
      </Suspense>
    </div>
  );
}

export default App;
